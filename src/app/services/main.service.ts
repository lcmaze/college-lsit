import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
// import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient, 
    // private _snackBar: MatSnackBar
    ) { }

  filterLink: any;
  changeFilter(link: any){
    this.filterLink = link;
  }

  post(value: any, link: string){
    return this.http.post(environment.apiUrl + link, JSON.stringify(value), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  get(link: string){
    return this.http.get(environment.apiUrl + link);
  }
  private cacheValue: any = [];
  getCache(link: string){
    if(typeof this.cacheValue[link] === 'undefined'){
      this.cacheValue[link] = this.http.get(environment.apiUrl + link)
      .pipe(
        shareReplay(1)
      );
    }
    return this.cacheValue[link];
  }

  // my snackbar 
  openSnackBar(message: string, action: string) {
    // this._snackBar.open(message, action, {
    //   duration: 2000,
    // });
  }

  courses: any = [
    {
      "course_name": "MBA/PGDM",
      "course_id": 1,
      "category_id": 21
    },
    {
      "course_name": "BBA/BBM",
      "course_id": 2,
      "category_id": 21
    },
    {
      "course_name": "M.PHIL/P.HD IN MANAGEMENT",
      "course_id": 3,
      "category_id": 21
    },
    {
      "course_name": "EXECUTIVE MBA ",
      "course_id": 4,
      "category_id": 21
    },
    {
      "course_name": "MMS ",
      "course_id": 5,
      "category_id": 21
    },
    {
      "course_name": "MHA ",
      "course_id": 6,
      "category_id": 21
    },
    {
      "course_name": "B.SC ",
      "course_id": 7,
      "category_id": 22
    },
    {
      "course_name": "M.SC ",
      "course_id": 8,
      "category_id": 22
    },
    {
      "course_name": "M.PHIL/P.HD IN SCIENCE",
      "course_id": 9,
      "category_id": 22
    },
    {
      "course_name": "BE/B.TECH",
      "course_id": 10,
      "category_id": 23
    },
    {
      "course_name": "ME/M.TECH",
      "course_id": 11,
      "category_id": 23
    },
    {
      "course_name": "M.PHIL/P.HD IN ENGINEERING",
      "course_id": 12,
      "category_id": 23
    },
    {
      "course_name": "BA",
      "course_id": 13,
      "category_id": 24
    },
    {
      "course_name": "MA ",
      "course_id": 14,
      "category_id": 24
    },
    {
      "course_name": "M.PHIL/P.HD IN ARTS",
      "course_id": 15,
      "category_id": 24
    },
    {
      "course_name": "BFA ",
      "course_id": 16,
      "category_id": 24
    },
    {
      "course_name": "D.LITT ",
      "course_id": 17,
      "category_id": 24
    },
    {
      "course_name": "B.COM ",
      "course_id": 18,
      "category_id": 25
    },
    {
      "course_name": "M.COM ",
      "course_id": 19,
      "category_id": 25
    },
    {
      "course_name": "M.PHIL/P.HD IN COMMERCE",
      "course_id": 20,
      "category_id": 25
    },
    {
      "course_name": "BCA ",
      "course_id": 21,
      "category_id": 26
    },
    {
      "course_name": "MCA ",
      "course_id": 22,
      "category_id": 26
    },
    {
      "course_name": "M.PHIL/P.HD IN COMPUTER APPLICATIONS",
      "course_id": 23,
      "category_id": 26
    },
    {
      "course_name": "B.SC",
      "course_id": 24,
      "category_id": 26
    },
    {
      "course_name": "B.ED ",
      "course_id": 25,
      "category_id": 27
    },
    {
      "course_name": "M.ED ",
      "course_id": 26,
      "category_id": 27
    },
    {
      "course_name": "M.PHIL/P.HD IN EDUCATION",
      "course_id": 27,
      "category_id": 27
    },
    {
      "course_name": "B.P.ED ",
      "course_id": 28,
      "category_id": 27
    },
    {
      "course_name": "M.P.ED ",
      "course_id": 29,
      "category_id": 27
    },
    {
      "course_name": "MD ",
      "course_id": 30,
      "category_id": 28
    },
    {
      "course_name": "MBBS ",
      "course_id": 31,
      "category_id": 28
    },
    {
      "course_name": "B.SC (MEDICINE) ",
      "course_id": 32,
      "category_id": 28
    },
    {
      "course_name": "MS ",
      "course_id": 33,
      "category_id": 28
    },
    {
      "course_name": "BACHELOR OF PHYSIOTHERAPY(BPT) ",
      "course_id": 34,
      "category_id": 28
    },
    {
      "course_name": "M.PHIL/PH.D IN MEDICINE ",
      "course_id": 35,
      "category_id": 28
    },
    {
      "course_name": "M.SC (MEDICINE) ",
      "course_id": 36,
      "category_id": 28
    },
    {
      "course_name": "MASTER OF PHYSIOTHERAPY(MPT) ",
      "course_id": 37,
      "category_id": 28
    },
    {
      "course_name": "BAMS ",
      "course_id": 38,
      "category_id": 28
    },
    {
      "course_name": "M.CH ",
      "course_id": 39,
      "category_id": 28
    },
    {
      "course_name": "BHMS ",
      "course_id": 40,
      "category_id": 28
    },
    {
      "course_name": "DIPLOMATE NATIONAL BOARD [DNB] ",
      "course_id": 41,
      "category_id": 28
    },
    {
      "course_name": "BUMS ",
      "course_id": 42,
      "category_id": 28
    },
    {
      "course_name": "B.PHARM ",
      "course_id": 43,
      "category_id": 29
    },
    {
      "course_name": "M.PHARM ",
      "course_id": 44,
      "category_id": 29
    },
    {
      "course_name": "M.PHIL/PH.D IN PHARMACY ",
      "course_id": 45,
      "category_id": 29
    },
    {
      "course_name": "LLB ",
      "course_id": 46,
      "category_id": 30
    },
    {
      "course_name": "LLM ",
      "course_id": 47,
      "category_id": 30
    },
    {
      "course_name": "M.PHIL/PH.D IN LAW ",
      "course_id": 48,
      "category_id": 30
    },
    {
      "course_name": "LLD ",
      "course_id": 49,
      "category_id": 30
    },
    {
      "course_name": "B.SC (NURSING) ",
      "course_id": 50,
      "category_id": 31
    },
    {
      "course_name": "M.SC (NURSING) ",
      "course_id": 51,
      "category_id": 31
    },
    {
      "course_name": "M.PHIL/PH.D IN PARAMEDICAL ",
      "course_id": 52,
      "category_id": 31
    },
    {
      "course_name": "BMM ",
      "course_id": 53,
      "category_id": 32
    },
    {
      "course_name": "MMC ",
      "course_id": 54,
      "category_id": 32
    },
    {
      "course_name": "M.PHIL/PH.D IN MASS COMMUNICATION ",
      "course_id": 55,
      "category_id": 32
    },
    {
      "course_name": "BACHELORS IN VOCATIONAL COURSES ",
      "course_id": 56,
      "category_id": 33
    },
    {
      "course_name": "MASTERS IN VOCATIONAL COURSES ",
      "course_id": 57,
      "category_id": 33
    },
    {
      "course_name": "B.DES ",
      "course_id": 58,
      "category_id": 34
    },
    {
      "course_name": "M.DES ",
      "course_id": 59,
      "category_id": 34
    },
    {
      "course_name": "M.PHIL/PH.D IN DESIGN ",
      "course_id": 60,
      "category_id": 34
    },
    {
      "course_name": "BHM ",
      "course_id": 61,
      "category_id": 35
    },
    {
      "course_name": "B.SC (HOTEL MANAGEMENT) ",
      "course_id": 62,
      "category_id": 35
    },
    {
      "course_name": "MHM ",
      "course_id": 63,
      "category_id": 35
    },
    {
      "course_name": "M.SC (HOTEL MANAGEMENT) ",
      "course_id": 64,
      "category_id": 35
    },
    {
      "course_name": "M.PHIL/PH.D IN HOTEL MANAGEMENT ",
      "course_id": 65,
      "category_id": 35
    },
    {
      "course_name": "B.SC (AGRICULTURE) ",
      "course_id": 66,
      "category_id": 36
    },
    {
      "course_name": "M.SC (AGRICULTURE) ",
      "course_id": 67,
      "category_id": 36
    },
    {
      "course_name": "M.PHIL/PH.D IN AGRICULTURE ",
      "course_id": 68,
      "category_id": 36
    },
    {
      "course_name": "M.PHIL IN AGRICULTURE ",
      "course_id": 69,
      "category_id": 36
    },
    {
      "course_name": "B.ARCH ",
      "course_id": 70,
      "category_id": 37
    },
    {
      "course_name": "M.ARCH ",
      "course_id": 71,
      "category_id": 37
    },
    {
      "course_name": "M.PHIL/PH.D IN ARCHITECTURE ",
      "course_id": 72,
      "category_id": 37
    },
    {
      "course_name": "M.PLANNING ",
      "course_id": 73,
      "category_id": 37
    },
    {
      "course_name": "B.PLANNING ",
      "course_id": 74,
      "category_id": 37
    },
    {
      "course_name": "BDS ",
      "course_id": 75,
      "category_id": 38
    },
    {
      "course_name": "MDS ",
      "course_id": 76,
      "category_id": 38
    },
    {
      "course_name": "M.PHIL/PH.D IN DENTAL ",
      "course_id": 77,
      "category_id": 38
    },
    {
      "course_name": "BBA (AVIATION) ",
      "course_id": 78,
      "category_id": 39
    },
    {
      "course_name": "B.SC (AVIATION) ",
      "course_id": 79,
      "category_id": 39
    },
    {
      "course_name": "M.SC (AVIATION) ",
      "course_id": 80,
      "category_id": 39
    },
    {
      "course_name": "BVSC ",
      "course_id": 81,
      "category_id": 40
    },
    {
      "course_name": "MVSC ",
      "course_id": 82,
      "category_id": 40
    },
    {
      "course_name": "PH.D IN VETERINARY SCIENCE ",
      "course_id": 83,
      "category_id": 40
    }
  ];
  states: any = [
    {
      "state_id": 2,
      "state_name": "TAMIL NADU "
    },
    {
      "state_id": 4,
      "state_name": "KARNATAKA "
    },
    {
      "state_id": 6,
      "state_name": "KERALA "
    },
    {
      "state_id": 11,
      "state_name": "ANDRA PRADESH "
    }
  ];
  city: any = [
    {
      "city_id": 383,
      "city_name": "TRIVANDRUM "
    },
    {
      "city_id": 391,
      "city_name": "KOCHI "
    },
    {
      "city_id": 78,
      "city_name": "CHENNAI "
    },
    {
      "city_id": 82,
      "city_name": "SALEM "
    },
    {
      "city_id": 276,
      "city_name": "BANGALORE "
    },
    {
      "city_id": 278,
      "city_name": "MYSORE "
    },
  ]
  category: any = [
    {
      "cat_id": 21,
      "category_name": "MANAGEMENT ",
      "created_at": "2020-03-11T06:21:16.000Z",
      "updated_at": null,
      "image": "management.svg"
    },
    {
      "cat_id": 22,
      "category_name": "SCIENCE ",
      "created_at": "2020-03-11T06:21:16.000Z",
      "updated_at": null,
      "image": "science.svg"
    },
    {
      "cat_id": 23,
      "category_name": "ENGINEERING ",
      "created_at": "2020-03-11T06:21:16.000Z",
      "updated_at": null,
      "image": "engineering.svg"
    },
    {
      "cat_id": 24,
      "category_name": "ARTS ",
      "created_at": "2020-03-11T06:21:16.000Z",
      "updated_at": null,
      "image": "arts.svg"
    },
    {
      "cat_id": 25,
      "category_name": "COMMERCE ",
      "created_at": "2020-03-11T06:21:17.000Z",
      "updated_at": null,
      "image": "commerce.svg"
    },
    {
      "cat_id": 26,
      "category_name": "COMPUTER APPLICATIONS ",
      "created_at": "2020-03-11T06:21:17.000Z",
      "updated_at": null,
      "image": "computer.svg"
    },
    {
      "cat_id": 27,
      "category_name": "EDUCATION ",
      "created_at": "2020-03-11T06:21:17.000Z",
      "updated_at": null,
      "image": "education.svg"
    },
    {
      "cat_id": 28,
      "category_name": "MEDICAL ",
      "created_at": "2020-03-11T06:21:17.000Z",
      "updated_at": null,
      "image": "medical.svg"
    },
    {
      "cat_id": 29,
      "category_name": "PHARMACY ",
      "created_at": "2020-03-11T06:21:17.000Z",
      "updated_at": null,
      "image": "pharmacy.svg"
    },
    {
      "cat_id": 30,
      "category_name": "LAW ",
      "created_at": "2020-03-11T06:21:18.000Z",
      "updated_at": null,
      "image": "law.svg"
    },
    {
      "cat_id": 31,
      "category_name": "PARAMEDICAL ",
      "created_at": "2020-03-11T06:21:18.000Z",
      "updated_at": null,
      "image": "paramedical.svg"
    },
    {
      "cat_id": 32,
      "category_name": "MASS COMMUNICATIONS ",
      "created_at": "2020-03-11T06:21:18.000Z",
      "updated_at": null,
      "image": "communication.svg"
    },
    {
      "cat_id": 33,
      "category_name": "VOCATIONAL COURSES ",
      "created_at": "2020-03-11T06:21:18.000Z",
      "updated_at": null,
      "image": "vocational.svg"
    },
    {
      "cat_id": 34,
      "category_name": "DESIGN ",
      "created_at": "2020-03-11T06:21:18.000Z",
      "updated_at": null,
      "image": "design.svg"
    },
    {
      "cat_id": 35,
      "category_name": "HOTEL MANAGEMENT ",
      "created_at": "2020-03-11T06:21:18.000Z",
      "updated_at": null,
      "image": "hotel.svg"
    },
    {
      "cat_id": 36,
      "category_name": "AGRICULTURE ",
      "created_at": "2020-03-11T06:21:19.000Z",
      "updated_at": null,
      "image": "agriculture.svg"
    },
    {
      "cat_id": 37,
      "category_name": "ARCHITECTURE ",
      "created_at": "2020-03-11T06:21:19.000Z",
      "updated_at": null,
      "image": "architecture.svg"
    },
    {
      "cat_id": 38,
      "category_name": "DENTAL ",
      "created_at": "2020-03-11T06:21:19.000Z",
      "updated_at": null,
      "image": "dental.svg"
    },
    {
      "cat_id": 39,
      "category_name": "AVIATION ",
      "created_at": "2020-03-11T06:21:19.000Z",
      "updated_at": null,
      "image": "aviation.svg"
    },
    {
      "cat_id": 40,
      "category_name": "VETERINARY SCIENCES ",
      "created_at": "2020-03-11T06:21:19.000Z",
      "updated_at": null,
      "image": "vetenary.svg"
    }
  ]
  fcolleges: any = [
    {
      "college_id": 2,
      "college_name": "IIT BOMBAY - INDIAN INSTITUTE OF TECHNOLOGY, MUMBAI"
    },
    {
      "college_id": 3,
      "college_name": "LADY HARDINGE MEDICAL COLLEGE - [LHMC], NEW DELHI"
    },
    {
      "college_id": 4,
      "college_name": "INDIAN INSTITUTE OF TECHNOLOGY - [IIT BHU], VARANASI"
    },
    {
      "college_id": 5,
      "college_name": "INDIAN INSTITUTE OF MANAGEMENT - [IIM], LUCKNOW"
    },
    {
      "college_id": 6,
      "college_name": "BIRLA INSTITUTE OF TECHNOLOGY AND SCIENCE - [BITS], PILANI"
    },
    {
      "college_id": 7,
      "college_name": "TAMIL NADU AGRICULTURAL UNIVERSITY - [TNAU], COIMBATORE"
    },
    {
      "college_id": 8,
      "college_name": "ACHARYA NG RANGA AGRICULTURAL UNIVERSITY - [ANGRAU], GUNTUR"
    },
    {
      "college_id": 9,
      "college_name": "PEARL ACADEMY WEST CAMPUS, NEW DELHI"
    },
    {
      "college_id": 10,
      "college_name": "INDIAN INSTITUTE OF TECHNOLOGY - [IIT], GUWAHATI"
    }
  ]
}
