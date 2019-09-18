import express, { NextFunction, Request, Response } from 'express';

export const entityNotFoundErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error.name === 'EntityNotFound') {
    return res.status(404).json({
      type: 'EntityNotFound',
      message: error.message,
    });
  }
  next(error);
};
