# vue-summernote

Rich text editor for VueJS.2 based on summernote

## Requires
[Bootstrap 4](https://getbootstrap.com)

[VueJS 2](https://vuejs.org/)

[summernote 0.8.1](https://summernote.org/)

## Usage

``` html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/css/bootstrap.min.css"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/summernote@0.8.10/dist/summernote-bs4.css">

<script src="https://cdn.jsdelivr.net/npm/babel-polyfill@latest/dist/polyfill.min.js"></script>            
<script src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.slim.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/popper.js@latest/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/js/bootstrap.min.js"></script>
    
<script src="https://cdn.jsdelivr.net/npm/summernote@0.8.10/dist/summernote-bs4.min.js"></script>  
<script src="https://kotarov.github.io/vue-summernote/vue-summernote.es5.js"></script>
...
<summernote v-model="myValue" [autoselect]></summernote>
```
