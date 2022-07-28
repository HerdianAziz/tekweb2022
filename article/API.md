# API POINTS



## ARTICLE

### Menampilkan article user
```
GET: /article

response:
[
  {
    "id"              : "",
    "title"           : "",
    "author"          : "",
    "thumbnail"       : "",
    "content"         : "",
    "markdown"        : "",
  },
  {
    ...
  }
]
```
### Menampilkan article user berdasarkan ```id```
```
GET: /article/[id]

response:
{
  "id"              : "",
  "title"           : "",
  "author"          : "",
  "thumbnail"       : "",
  "content"         : "",
  "markdown"        : "",
}
```
### Menambahkan article user
```
POST: /article

data:
{
  "id"              : "",
  "title"           : "",
  "author"          : "",
  "thumbnail"       : "",
  "content"         : "",
  "markdown"        : "",
}

response:
true    //if true
false   //if false
```
### Mengubah article user
```
PUT: /biodata

data:
{
  "nama_lengkap"    : "",
  "nama_panggilan"  : "",
  "tgl_lahir"       : "",
  "deskripsi"       : "",
  "avatar"          : ""
}

response:
true    //if true
false   //if false
```
### Menghapus article user
```
DELETE: /article/[id]

response:
true    //if true
false   //if false
```
## Biodata
### Menampilkan seluruh article
```
GET: /biodata

response:
[
  {
    "id"        : "",
    "nama"      : "",
    "desc"      : "",
    "name"      : "",
    "gambar_1"  : "",
    "gambar_2"  : "",
    "gambar_3"  : ""
  },
  {
    ...
  }
]
```
### Menampilkan article berdasarkan ```id```
```
GET: /biodata/[id]

response:
{
  "id"        : "",
  "nama"      : "",
  "desc"      : "",
  "name"      : "",
  "gambar_1"  : "",
  "gambar_2"  : "",
  "gambar_3"  : ""
}
```
### Menambahkan biodata
```
POST: /biodata

data:
{
  "id"        : "",
  "nama"      : "",
  "desc"      : "",
  "name"      : "",
  "gambar_1"  : "",
  "gambar_2"  : "",
  "gambar_3"  : ""
}

response:
true    //if true
false   //if false
```
### Mengubah biodata
```
PUT: /biodata

data:
{
  "id"        : "",
  "nama"      : "",
  "desc"      : "",
  "name"      : "",
  "gambar_1"  : "",
  "gambar_2"  : "",
  "gambar_3"  : ""
}

response:
true    //if true
false   //if false
```
### Menghapus article
```
DELETE: /biodata

response:
true    //if true
false   //if false
```

## HOME
### Menampilkan seluruh data home
```
GET: /home

response:
[
  {
    "id"          : "",
    "des"         : ""
  },
  {
    ...
  }
]
```
### Menampilkan data home berdasarkan ```id```
```
GET: /home/[id]

response:
{
  "id"          : "",
  "des"         : ""
}
```
### Menambahkan data home
```
POST: /home

data:
{
  "id"          : "",
  "des"         : ""
}

response:
true    //if true
false   //if false
```

### Mengubah data home
```
PUT: /home

data:
{
  "id"          : "",
  "des"         : ""
}

response:
true    //if true
false   //if false
```
### Menghapus data home
```
DELETE: /home/[id]

response:
true    //if true
false   //if false
```
## PROJECT
### Menampilkan seluruh data project
```
GET: /project

response:
[
  {
    "id"          : "",
    "judul"       : "",
    "gesc"        : "",
    "image"       : ""
  },
  {
    ...
  }
]
```
### Menampilkan data project berdasarkan ```id```
```
GET: /project/[id]

response:
{
  "id"          : "",
  "judul"       : "",
  "desc"        : "",
  "image"       : ""
}
```
### Menambahkan data project media
```
POST: /project

data:
{
  "id"          : "",
  "judul"       : "",
  "desc"        : "",
  "image"       : ""
}

response:
true    //if true
false   //if false
```

### Mengubah data project
```
PUT: /project

data:
{
  "id"          : "",
  "judul"       : "",
  "desc"        : "",
  "image"       : ""
}

response:
true    //if true
false   //if false
```
### Menghapus data project
```
DELETE: /project/[id]

response:
true    //if true
false   //if false
```

# DATABASE DESIGN
![Design Database](https://raw.githubusercontent.com/HerdianAziz/tekweb2022/main/article/Design%20API.png)
