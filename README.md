# BKN Trading — Website

Official website of **BKN Trading合同会社 (BKN Trading LLC)**, a Japanese company buying and selling cars and motorcycles, providing auction sourcing, overseas export, and repair services. Established 2020.

- Pages: Home (`index.html`), About (`about.html`), Contact (`contact.html`)
- Languages: Japanese (default) / English — toggle in the header, remembered in the browser
- Plain HTML + CSS + a small JS file. No build step.

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Editing text

Every piece of text appears twice, once per language:

```html
<span lang="ja">日本語テキスト</span><span lang="en">English text</span>
```

## Photos

Car photos are free-licence images loaded from [Unsplash](https://unsplash.com/license) (commercial use allowed).
To use your own photos, put them in an `images/` folder and replace the `https://images.unsplash.com/...` URLs in the HTML.
