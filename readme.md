# Prompt Placeholder Filler

A simple web-based application to dynamically fill placeholders in text prompts. This project is built with **HTML**, **TailwindCSS**, and **Alpine.js** for a lightweight and interactive experience.

## Live Demo 

Please visit https://promptfiller.netlify.app for a live demo. 

## Features

- **Dynamic Placeholder Detection**: Automatically detects placeholders in the format `[Placeholder]` or `{Placeholder}` from the entered text.
- **Interactive Input Fields**: Provides input fields for each detected placeholder to allow easy filling.
- **Real-Time Updates**: Displays the final prompt with replaced placeholders in real-time.
- **Copy to Clipboard**: Copy the final prompt to your clipboard with a single click.

## Technologies Used

- **HTML**: For the structure of the application.
- **TailwindCSS**: For styling and responsive design.
- **Alpine.js**: For interactivity and state management.

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/prompt-placeholder-filler.git
   ```

2. Navigate to the project directory:
   ```bash
   cd prompt-placeholder-filler
   ```

3. Open the `index.html` file in your browser:
   ```bash
   open index.html
   ```

4. Enter your prompt in the "Enter Prompt" textarea. For example:
   ```
   Hello, [name]! Welcome to [platform].
   ```

5. Fill in the values for the detected placeholders in the generated input fields.

6. Copy the final prompt to your clipboard using the "Copy" button.

## Example

### Input Prompt:
```
Hello, [name]! You have won a {prize}.
```

### Placeholder Input:
- `name`: John
- `prize`: $100 Gift Card

### Final Output:
```
Hello, John! You have won a $100 Gift Card.
```

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue to report bugs or suggest new features.

## License

This project is licensed under the MIT License. 

## Acknowledgments

- [Alpine.js Documentation](https://alpinejs.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/)