import express from "express";
import { UserController } from "../controller/user";
import { requireAuth } from "../security/passport";
import { GameAuthorization } from "../security/game";