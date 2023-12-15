const express = require('express');
const helmet = require('helmet');
import app from '../../app';

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
