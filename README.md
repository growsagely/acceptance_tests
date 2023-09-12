# Acceptance Test Workshop

## :warning: For demonstration purposes, this code prioritizes simplicity over best practices and is not suitable for production.

``` bash
npm install -g allure-commandline
```

Install dependencies:
``` bash
find . -maxdepth 2 -name 'package.json' ! -path './node_modules/*' -print0 | xargs -0 -n1 dirname | sort -u | xargs -I {} npm install --prefix {}
```

Start the app:
``` bash
npm run start
```

Run tests using another cmd window (or a tmux pane if you're awesome):
``` bash
cd __tests__
npm test
```

Run reports:
```bash
npm run report
```
