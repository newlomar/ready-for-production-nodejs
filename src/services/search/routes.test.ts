import express from "express";
import type { Router } from "express";
import request from "supertest";
import { applyMiddleware, applyRoutes } from "../../utils/index.ts";
import axios from "axios";
import middleware from "../../middleware/index.ts";
import errorHandlers from "../../middleware/errorHandlers.ts";
import routes from "./routes.ts";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;