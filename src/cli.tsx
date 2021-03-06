#!/usr/bin/env node
"use strict";
import * as React from "react";
import { render } from "ink";
import * as meow from "meow";
import * as importJsx from 'import-jsx'

const ui = importJsx("./ui");

const cli = meow(`
	Usage
	  $ pickmyrec-downloader

	Options
		--name  Your name

	Examples
	  $ pickmyrec-downloader --name=Jane
	  Hello, Jane
`);

render(React.createElement(ui, cli.flags));
