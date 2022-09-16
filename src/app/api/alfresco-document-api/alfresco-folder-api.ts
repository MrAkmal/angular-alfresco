import { Injectable } from "@angular/core";
import axios from "axios";


@Injectable(
  { providedIn: "root" }
)
export class AlfrescoFolderApi {

  baseUrl: string = "http://localhost:9090/v1/alfresco/folder"

  constructor() {

  }

  async getAll() {

    try {
      const res = await axios.get(this.baseUrl);
      console.log("all : ",res.data.data);
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }

  async get(id: string) {

    try {
      const res = await axios.get(this.baseUrl + '/' + id);
      console.log("id : ",res.data.data);
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }

  async getSubFolders(folderId: string) {

    try {
      const res = await axios.get(this.baseUrl + '/sub_folders/' + folderId);
      console.log("sub : ",res.data.data);
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }

  async getMainFolder() {

    try {
      const res = await axios.get(this.baseUrl + '/main_folders');
      console.log("main : ",res.data.data);
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }


  async save(name: string, parentFolderId: string) {


    await axios.post(this.baseUrl,
      { name, parentFolderId })
      .then(res => {
        console.log(res);
        return res.data;
      }).catch(err => {
        console.log(err);
      }
      );
  }


  async delete(folderId: string) {


    await axios.delete(this.baseUrl + '/' + folderId,)
      .then(res => {
        console.log(res);
        return res.data;
      }).catch(err => {
        console.log(err);
      }
      );
  }

  async update(name:string,folderId:string) {


    await axios.put(this.baseUrl,
      { name,folderId })
      .then(res => {
        console.log(res);
        return res.data;
      }).catch(err => {
        console.log(err);
      }
      );
  }



}
