// Copyright (c) 2020 Olivia B-R All rights reserved
//
// Created by: Olivia B-R
// Created on: may 2022
// This file contains the JS functions for index.html

"use strict"

function onLoad() {
  if (localStorage.cookietotal) {
    document.getElementById("cookie").innerHTML =
      "You have: " + localStorage.cookietotal + " cookies."
  } else {
    localStorage.cookietotal = 0
    document.getElementById("cookie").innerHTML =
      "You have: " + localStorage.cookietotal + " cookies."
  }
}
function myButtonClicked() {
  localStorage.cookietotal++
  document.getElementById("cookie").innerHTML =
    "You have: " + localStorage.cookietotal + " cookies."
}
