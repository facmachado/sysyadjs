#!/bin/bash

#
# run.sh - YAD application environment loader
#
# Copyright (c) 2020 Flavio Augusto (@facmachado)
#
# This software may be modified and distributed under the terms
# of the MIT license. See the LICENSE file for details.
#
# Usage: bash run.sh <development|production>
#


#
# Testing environment is powered by mocha (see package.json)
#


#
# Development
#
function run_development() {
  x-www-browser http://${HOST}:${PORT}/ && read
}


#
# Production
#
function run_production() {
  yad --html --browser        \
    --width=840 --height=480  \
    --maximized --no-buttons  \
    --uri=http://${HOST}:${PORT}/ && exit 0
}


#
# Environment checker & starter
#
if test "$(LC_ALL=C type -t run_$1)" != "function"; then
  echo "Usage: $(basename $0) <development|production>" >&2 && exit 1
else
  run_$1
fi
