
import express from "express";
import BaseController from "../utils/BaseController";
import { burgersService } from "../services/BurgersService"
import { BURGERDB } from "../db/BURGERDB";
//  import { get } from "mongoose";

export class BurgersController extends BaseController{
    constructor() {
        super("api/burgers");
        this.router
            .get("", this.getAll)
            .get("/:id", this.getOne)
            .post("", this.create)    
            .delete("/:id", this.delete)
            .put("/:id", this.edit)
    }
    async getAll(req, res, next) {
        try {
            const burgers = burgersService.getAll()
            res.send(burgers)
        } catch(error) {
            next(error)
        }
    }

    async getOne(req, res, next) {
        try {
            res.send(burgersService.getOne(req.params.id))
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            let newBurger = req.body
            const burger = burgersService.create(newBurger)
            res.status(201).send({data: burger, message:"Burger Created!", count: BURGERDB.burgers.length })
        } catch (error) {
            
        }
    }

    async edit(req, res, next) {
        try {
            let editedBurger = req.body
            const burger = burgersService.edit(editedBurger, req.params.id)
            res.send(burger)
        } catch (error) {
            
        }
    }

    async delete(req, res, next) {
        try {
            const id = req.params.id
            burgersService.delete(id)
            res.send("Burger Deleted")
        } catch (error) {
            next(error)
        }

    }
}