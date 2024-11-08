# brdef-checker

<div align="center">
    <p>
        <a href="https://github.com/IronKyle38/brdef-checker/commits/main"><img
            src="https://img.shields.io/github/last-commit/IronKyle38/brdef-checker"
            alt="GitHub last commit" /></a>
        <a href="https://github.com/IronKyle38/brdef-checker/network/dependencies"><img
            src="https://img.shields.io/librariesio/github/IronKyle38/brdef-checker"
            alt="Dependency status for GitHub repo" /></a>
        <a href="https://github.com/IronKyle38/brdef-checker/releases/latest"><img
            src="https://img.shields.io/github/v/release/IronKyle38/brdef-checker?display_name=tag&include_prereleases"
            alt="GitHub release (latest by date)" /></a>
        <a href="https://github.com/IronKyle38/brdef-checker"><img
            src="https://img.shields.io/github/languages/code-size/IronKyle38/brdef-checker"
            alt="GitHub code size in bytes" /></a>
        <a href="LICENSE"><img
            src="https://img.shields.io/github/license/IronKyle38/brdef-checker"
            alt="License" /></a>
    </p>
</div>

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This is 

## Installation

1. Install [Node.js](https://nodejs.org/en/download/prebuilt-binaries)

2. Clone the repository
    
    ```bash
    git clone https://github.com/IronKyle38/brdef-checker.git
    ```

3. Go to the project folder

    ```bash
    cd brdef-checker
    ```

4. Install the dependencies

    [![cli-progress](https://img.shields.io/github/package-json/dependency-version/IronKyle38/brdef-checker/cli-progress)](https://github.com/npkgz/cli-progress)
    [![xml2js](https://img.shields.io/github/package-json/dependency-version/IronKyle38/brdef-checker/xml2js)](https://github.com/Leonidas-from-XIV/node-xml2js)

    ```bash
    npm install
    ```

## Usage

To function correctly, the user must have an archive in .XML format of their Blu-ray collection from the My Movies application. (File > Export > XML File)

1. Ensure you have the XML file exported from My Movies if you don't have it, follow the steps below:
> - Open the My Movies Collection Management
> - Click on the "File" menu.
> - Click on "Export".
> - Click on "XML File".
> - Select only "Export Disc Titles".
> - Save the file to your computer.

2. Run the script to process the XML file:

    ```bash
    node start
    ```

3. The script will output the results to the console.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[Licence](https://github.com/IronKyle38/brdef-checker/blob/main/LICENSE)
