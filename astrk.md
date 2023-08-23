#### Abstract

Astrk will be a place where we collect and manage all our config files within one place, like .*, .*ignore we will manage these files from .astrk file, for example

```js
prettier = {
	"tab":5
}
eslint = {
	...
}

export {prettier,eslint, ... }
```
all these files will be in a directory called astrk, and will hold to dir
astrk, and astrkignore

to make them good, I don't know how .gitignore will work with this and ignore files all


#### Issues that will face us
- [x] How to make these packages points to the files into the astrk dir instead of the root dir
- [ ] How to override the config file in the .astrk file ?
- [ ] move all the existed .files and exclude some that we cannot deal with them
- [ ] rewrite the package.json files to have these change their places
- [ ] how to make these packages are awake to the changes like tsconfig.ts
      when we edit things inside of it the VScode lsn for these changes 

