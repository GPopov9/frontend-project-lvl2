<a href="https://codeclimate.com/github/GPopov9/frontend-project-lvl2/maintainability"><img src="https://api.codeclimate.com/v1/badges/c4fab2be8946d277deab/maintainability" /></a> <a href="https://codeclimate.com/github/GPopov9/frontend-project-lvl2/test_coverage"><img src="https://api.codeclimate.com/v1/badges/c4fab2be8946d277deab/test_coverage" /></a> 
![Node CI](https://github.com/GPopov9/frontend-project-lvl2/workflows/Node%20CI/badge.svg)

# frontend-project-lvl2 (Hexlet.io) - Generate differences
During this project developed cli-utility for searching differences in configuration files such as JSON, ini, yaml

## Installation 
```
https://github.com/GPopov9/frontend-project-lvl2.git
$ make install
$ npm link
```
## Program Description 
```
$ gendiff -h
```
<a href="https://asciinema.org/a/1orlltKX0QBUvAmaJvdvzQ84y" target="_blank"><img src="https://asciinema.org/a/1orlltKX0QBUvAmaJvdvzQ84y.svg" /></a>

## Generate differences of plain .json files (string output)
```
$ gendiff <filepath1> <filepath2>
```
 <a href="https://asciinema.org/a/BtzdZ9Kwq4qA6cWxeLW8WHy2N" target="_blank"><img src="https://asciinema.org/a/BtzdZ9Kwq4qA6cWxeLW8WHy2N.svg" /></a>

## Generate differences of plain .yml files (string output)
```
$ gendiff <filepath1> <filepath2>
```
<a href="https://asciinema.org/a/Zj7UZS1F1VntvFZNnJoRmOEs9" target="_blank"><img src="https://asciinema.org/a/Zj7UZS1F1VntvFZNnJoRmOEs9.svg" /></a>

## Generate differences of plain .ini files (string output)
```
$ gendiff <filepath1> <filepath2>
```
<a href="https://asciinema.org/a/BI1GKvdKBxYnKBCcLzZegLMvh" target="_blank"><img src="https://asciinema.org/a/BI1GKvdKBxYnKBCcLzZegLMvh.svg" /></a>

## Generate differences of nested .json files (string output)
```
$ gendiff <filepath1> <filepath2>
```
<a href="https://asciinema.org/a/mkeCsgk1C9wu3crrPqX43mNha" target="_blank"><img src="https://asciinema.org/a/mkeCsgk1C9wu3crrPqX43mNha.svg" /></a>

## Generate differences of nested .json files (plain format)
```
$ gendiff --format plain <filepath1> <filepath2>
```
<a href="https://asciinema.org/a/5TPcz9RDdsE76Wph9jt7nj4Xn" target="_blank"><img src="https://asciinema.org/a/5TPcz9RDdsE76Wph9jt7nj4Xn.svg" /></a>

## Generate differences of nested .json files (json format)
```
$ gendiff --format plain <filepath1> <filepath2>
```
<a href="https://asciinema.org/a/K3eZJ8ZdTX1a9rBLlGVKgPNo3" target="_blank"><img src="https://asciinema.org/a/K3eZJ8ZdTX1a9rBLlGVKgPNo3.svg" /></a>
