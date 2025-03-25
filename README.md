# Partnerships Portfolio

> This repository aims to hold the partnerships portfolio of the Association through a simple html page.

## Updating the portfolio

With the need to update each year the portfolio or in any need to provide the most recent information, you can follow the steps below:

- Clone the repository (or just use the web interface):

```bash
git clone git@github.com:DeVinci-FabLab/Partnerships-Portfolio.git
```

- Move to the repository folder:

```bash
cd Partnerships-Portfolio
```

- Remove the old portfolio:

```bash
rm -rf docs/portfolio.pdf
```

- Rename and add the new version to match the name of the old one `portfolio.pdf` inside the `docs` folder.
- Commit and push the changes.

The repository is set up to take the `docs` folder as the source for the GitHub Pages, so the portfolio will be updated automatically.

## License

This repository is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.
