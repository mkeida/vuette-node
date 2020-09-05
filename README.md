![vuette](https://user-images.githubusercontent.com/34581569/92305628-5000a900-ef89-11ea-96af-1a17db4eecf5.png)

# vuette-node
Kombinace frameworků Nette a Vue s build procesem na Node.js. Šablona je postavena na webpacku.


## Jak to funguje?
Webpack bundluje veškerý kód (výstupní soubor `bundle.js`) a ukládá všechny assety projektu (např. obrázky) do složky `www/assets`, které jsou následně využívány Nette aplikací. Díky balíčku `oops/webpack-nette-adapter` je automaticky upravována cesta k `bundle.js` podle toho, zda jsme zrovna ve vývojovém prostředí (tj. cesta k lokálnímu dev-serveru) nebo produkčním prostředí (např. web.cz/assets).

```html
<script src='{webpack bundle.js}'></script>
```

## Odkazy v komponentách

Komponenty pochopitelně neumožňují použití šablonovacího systému **latte** . Vue má své vlastní funkcionality pro psaní šablon (jako např. filtry a direktivy) a není to tedy problém do doby, než potřebujeme vytvořit odkaz na presenter. Pro tyto účely obsahuje šablona komponentu `NLink`:

```html
<n-link to="Homepage:default" :params="{ id: 1, chapter: 7 }" anchor="heading">Odkaz</n-link>
```

Komponenta je poté přeložena na:

```html
<a href="https://web.cz/homepage/default/1?chapter=7#heading">Odkaz</a>
```
## API presenter

Šablona obsahuje předpřipravený `ApiPresenter`, jež je zodpovědný za generování odkazů pro komponentu `NLink.vue`.

## Instalace
Je potřeba mít nainstalované běhové prostředí Node.js a správce balíčků NPM.

### Serverová část
Obsah adresáře umístíme na náš lokální server (v MAMP/XAMP to je např. složka `htdocs`) a v případě, že jsme obsah nenakopírovali do rootu této složky upravíme i směrování v souborech `.htaccess`. 

### Závislosti šablony
V konzoli si otevřeme rootovský adresář tohoto balíčku příkazem `cd <vaše-cesta>/htdocs/www` a poté nainstalujeme všechny závislosti příkazem `npm install`. 

### Spuštění
Projekt spouštíme příkazem `npm run start`. Po spuštění bude webpack překládat naše `.vue` komponenty a další kód do prohlížečem spustitelného JavaScriptu, který se nachází v `www/assets/bundle.js`. 

## Závislosti šablony

| Jméno         | Odkaz         |
| ------------- |-------------|
| webpack-nette-adapter (server)      | https://packagist.org/packages/oops/webpack-nette-adapter |
| JQuery (klient)        | https://github.com/jquery/jquery |
| Vue (klient)      | https://github.com/vuejs/vue |
| nette-forms (klient) |https://www.npmjs.com/package/nette-forms | 
