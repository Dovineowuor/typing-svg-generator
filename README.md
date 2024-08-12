---

# Typing SVG Generator

Welcome to the **Typing SVG Generator**! This project allows users to create customizable SVG animations of typing text. The generator provides a user-friendly interface where you can configure text, fonts, colors, shadows, and background settings to create dynamic and engaging typing animations for your web projects.

## Features

- **Text Customization:** Add and customize text lines with adjustable font size, weight, and spacing.
- **Font Selection:** Choose fonts from Google Fonts and adjust their size and weight.
- **Text Shadow:** Add and customize text shadows with adjustable color, offset, and blur.
- **Background Options:** Set background color, image, and size for the SVG.
- **Preview:** Real-time preview of your SVG animation as you make changes.
- **Responsive Design:** The tool adapts to different screen sizes and devices.

## Getting Started

To use the Typing SVG Generator, follow these steps:

1. **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/typing-svg-generator.git
    cd typing-svg-generator
    ```

2. **Set Up the Flask Environment**

   Ensure you have Python and Flask installed. You can set up a virtual environment and install Flask using:

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    pip install Flask
    ```

3. **Run the Flask App**

   Start the Flask server with:

    ```bash
    flask run
    ```

   Open your browser and go to `http://localhost:5000` to access the Typing SVG Generator.

## Directory Structure

The project is organized as follows:

- **`app/`**: Contains the Flask application files.
  - **`__init__.py`**: Initializes the Flask app and its configuration.
  - **`routes.py`**: Defines the routes and view functions for the application.
- **`static/`**: Contains static files like CSS, JavaScript, and images.
  - **`css/style.css`**: Styles for the application.
  - **`css/loader.css`**: Styles for the loader animation.
  - **`css/toggle-dark.css`**: Styles for dark mode toggle.
  - **`js/script.js`**: JavaScript for handling form inputs and SVG preview.
  - **`js/toggle-dark.js`**: JavaScript for toggling dark mode.
  - **`js/jscolor.min.js`**: JavaScript color picker library.
- **`templates/`**: Contains HTML templates.
  - **`index.html`**: Main HTML file for the Typing SVG Generator.
- **`config.py`**: Configuration settings for the Flask app.

## Usage

1. **Add Text:** Use the form to add text lines that you want to appear in the SVG animation.
2. **Customize Text:** Adjust the font, weight, size, letter spacing, and color to match your design needs.
3. **Set Text Shadow:** Customize the shadow color, offset, and blur for added visual effects.
4. **Configure Background:** Choose a background color, image URL, and size to enhance your SVG.
5. **Preview:** See a live preview of your SVG animation in the preview section.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request. Make sure to follow the coding standards and test your changes before submitting.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

If you have any questions or feedback, please reach out via GitHub Issues or contact the repository owner at [owuordove@gmail.com](mailto:oquordove@gmail.com).

---
