import { FAKEDB } from "../db/FAKEDB";

class DogsService{

    getAll()

    {return FAKEDB.dogs}

}

export const dogsService = new DogsService()