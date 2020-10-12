> [INSTRUCTIONS.md](./INSTRUCTIONS.md)

# To DO List

 This is a javascript refactoring of to do list project to build A to do list.
This project has been developed using the _development strategy_ concept with one branch per step.
It is a way to practice the concept of asynchronous programming in javascript.

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

 - This project is a simple way to practice asynchronous programming in using git, github, html and css and javascript.
- The purpose is to use fetch and async / await and be familiar with asynchronous programming in javascript.
- For intermediate level.

> This project use [boilerplate repository](https://github.com/HackYourFutureBelgium/restful-pjs)

## Screenshots

![Example screenshot](public/assets/images/screenshot-todo.png)

## Technologies

* HTML5
* CSS3
* Javascript
* Git & Github

## Setup

There are several ways to run this run this project. one of them is to install Live Server extension in VS Code.

## Code Examples

Examples of usage:

` try {
            const res = await fetch(`/todos/${id}`, {
                method: 'PATCH',
                body: JSON.stringify(edited),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
            return await res.json();
        } catch (err) {
            console.log(err);
        };`

## Features

List of features :

* Responsive
* Applying Incremental Development 
* Asynchronous programming

To-do list:

* Add some interactivity using javascript
* Improve the performance
* Add functionality to toggle all

## Status

Project is: _finished_

## Inspiration

Project inspired by  Practical JavaScript Tutorial and HYF


## Contact

Created by [@eltayeb](https://github.com/Eltayeb-Elgaali) - feel free to contact me!