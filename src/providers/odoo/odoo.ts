import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the OdooProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const odooUrl = "http://178.128.197.205/odooApi/index.php?";
@Injectable()
export class OdooProvider {
  private uid;
  private password;
  private employeeId;
  constructor(public http: HttpClient) {
    this.login("ant@g.com", "123456");
  }
  login(userName, password) {
    return this.http.get(
      odooUrl +
      "username=" + userName +
      "&password=" + password)
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }
  setUid(uid) {
    this.uid = uid
  }
  getUid() {
    return this.uid
  }
  setPassword(pass) {
    this.password = pass
  }
  getPassword() {
    return this.password
  }
  /* setRes_user_id(id) {
    this.res_user_id = id
  }
  getRes_user_id() {
    return this.res_user_id
  } */
  setEmployeeId(empId) {
    this.employeeId = empId
  }
  getEmployeeId() {
    return this.employeeId
  }
  getOdooData(uid, password, modal, method, domains = [], mapList = []) {
    return this.http.get(this.makeHttpUrl(uid, password, modal, method, domains, mapList))
  }
  makeHttpUrl(uid, password, modal, method, domains = [], mapList = []) {
    console.log(odooUrl +
      "uid=" + uid +
      "&password=" + password +
      "&modalname=" + modal +
      "&method=" + method +
      (method == "create" ? this.makeDomainQueryForCreate(domains) : this.makeDomainQuery(domains)) +
      this.makeMappingList(mapList))
    return (
      odooUrl +
      "uid=" + uid +
      "&password=" + password +
      "&modalname=" + modal +
      "&method=" + method +
      (method == "create" ? this.makeDomainQueryForCreate(domains) : this.makeDomainQuery(domains)) +
      this.makeMappingList(mapList)
    );
  }
  makeDomainQueryForCreate(domains = []) {
    let domainStr = "&parmlist[0]";
    if (domains.length != 0) {
      let i = 0;
      domains.forEach(dom => {
        domainStr += "[" + dom.filed + "]=" + dom.value
        i++;
        if (i < domains.length) domainStr += "&parmlist[0]";
      });
      return domainStr;
    } else {
      return "";
    }
  }
  makeMappingList(mapList = []) {
    if (mapList.length != 0) {
      let mapStr = "&mappinglist[";
      let j = 0;
      mapList.forEach(map => {
        if (map.prop == "fields") {
          for (let i = 0; i < map.prop_values.length; i++) {
            mapStr += map.prop + "][" + i + "]=" + map.prop_values[i];
            if (i < map.prop_values.length - 1) {
              mapStr += "&mappinglist[";
            }
          }
        } else {
          mapStr += map.prop + "]"
          for (let i = 0; i < map.prop_values.length; i++) {
            mapStr += "=" + map.prop_values[i];
            if (i < map.prop_values.length - 1) {
              mapStr += "&mappinglist[";
            }
          }
        }
        j++;
        if (j < mapList.length) mapStr += "&mappinglist[";
      });
      return mapStr;
    } else {
      return "";
    }
  }
  /* make domain string */
  makeDomainQuery(domains = []) {
    let domainStr = "&parmlist[0]";
    if (domains.length != 0) {
      let i = 0;
      domains.forEach(dom => {
        domainStr += "[" + i + "]" + "[0]=" +
          dom.filed + "&parmlist[0]" + "[" +
          i + "][1]=" + dom.experssion;
        if (Array.isArray(dom.value)) {
          let j = 0
          dom.value.forEach(element => {
            domainStr += "&parmlist[0]" + "[" + i + "][2][" + j + "]=" + element
            j++;
          });
        } else {
          domainStr += "&parmlist[0][" + i + "][2]=" + dom.value
        }
        console.log(dom.value)
        i++;
        if (i < domains.length) domainStr += "&parmlist[0]";
      });
      return domainStr;
    } else {
      return "";
    }
  }
}