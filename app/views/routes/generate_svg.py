from flask import Blueprint, request, jsonify
import svgwrite

bp = Blueprint('generate_svg', __name__)

@bp.route('/generate', methods=['POST'])
def generate():
    data = request.json

    # Extract parameters with default values
    lines = data.get('lines', '')
    font_size = int(data.get('size', 20))
    font_family = data.get('font', 'monospace')
    text_color = f"#{data.get('color', '36BCF7')}"
    background_color = f"#{data.get('background', '00000000')}"
    width = int(data.get('width', 400))
    height = int(data.get('height', 50))
    center = data.get('center', 'false').lower() == 'true'
    v_center = data.get('vCenter', 'false').lower() == 'true'
    multiline = data.get('multiline', 'false').lower() == 'true'
    duration = int(data.get('duration', 5000))
    pause = int(data.get('pause', 0))
    repeat = data.get('repeat', 'true').lower() == 'true'
    separator = data.get('separator', ';')
    letter_spacing = data.get('letterSpacing', 'normal')

    # Create SVG drawing
    dwg = svgwrite.Drawing(size=(width, height), profile='tiny')
    dwg.add(dwg.rect(insert=(0, 0), size=('100%', '100%'), fill=background_color))

    # Prepare text animation
    lines_text = lines.split(separator)
    if not multiline:
        lines_text = [lines]  # Ensure single line if not multiline

    y_offset = height // (len(lines_text) + 1) if len(lines_text) > 1 and not v_center else height // 2

    for i, line in enumerate(lines_text):
        text_element = dwg.text('', insert=(width // 2, y_offset), text_anchor='middle', fill=text_color, font_size=font_size, font_family=font_family, letter_spacing=letter_spacing)
        dwg.add(text_element)

        # Animation setup
        animation = svgwrite.animate.Animate(attributeName="text", values=";" + line, dur=f"{duration}ms", begin=f"{i * (duration + pause)}ms", repeatCount="indefinite" if repeat else "1")
        text_element.add(animation)

        # Adjust y_offset for vertical centering if multiline
        if multiline:
            y_offset += height // (len(lines_text) + 1)
        else:
            y_offset = height // 2

    # Convert SVG to string and return
    svg_data = dwg.tostring()
    return jsonify({'svg': svg_data})
