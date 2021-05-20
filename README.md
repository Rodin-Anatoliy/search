# Search
React-компонет поисковой строки - [cсылка на рабочую версию проекта](https://rodin-anatoliy.github.io/search/)


# Описание
Реализация кастомного autocompite для input поисковой строки


## Как это должно работать?

Пробная база состоит из 10 пользователей. При вводе символов в посиковую строку проиcходит вывод подходящих запросов, при отсутствии пересечений не выводится ничего, при первом клике выводятся все 10 запросов, при клике в сторону запросы скрываются

## Стек технологий (основа)
- React
- TypeScript
- Jest/Enzyme

## Время выполнения

Примерно один рабочий день

## Комментарий автора

Проект является пробой пера для технологий TypeScript, Jest/Enzyme

## Для установки:
1. [Склонировать](https://git-scm.com/book/ru/v2/Appendix-C%3A-%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D1%8B-Git-%D0%9A%D0%BB%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B8-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D1%80%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%B5%D0%B2) репозиторий на локальный компьютер  (https://github.com/Rodin-Anatoliy/search.git)
1. После распаковки, в директории проекта выполнить команду: 
    ```npm install``` 
(должен быть установлен [Node.js](https://nodejs.org/en/))
2. После установки зависимостей,в директории проекта для режима разработкм (dev mode), выполнить:
    ```npm run start```
3. Для проверки тестов:
    ```npm run test```
4. Для получения production (prod mode) версии проекта в директории проекта, выполнить:
    ```npm run build```
5. Созданная папка **build** является production версией проекта

## Getting Started
#### Import
```1. import { Injection, ClassNameInjection } from 'extension-injection'```  
```2. import extensionInjection from 'extension-injection'```  
```3. const extensionInjection = require('extension-injection')'```  
#### Call
1. ```Injection``` and ```ClassNameInjection``` ready to call
2. Use ```extensionInjection.Injection``` and ```extensionInjection.ClassNameInjection```
3. Use **extensionInjection.Injection** and ```extensionInjection.ClassNameInjection```
##
