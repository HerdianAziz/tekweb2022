# API Point

## ARTICLE

### Menampilkan article user
```
GET: /article

response:
[
  {
    "id"          : "",
    "title"       : "",
    "author"      : "",
    "thumbnail"   : "",
    "content"     : "",
    "markdown"    : "",
  },
  ...
]
```
### Menampilkan article user berdasarkan ```id```
```
GET: /article/[id]

response:
{
  "id"          : "",
  "title"       : "",
  "author"      : "",
  "thumbnail"   : "",
  "content"     : "",
  "markdown"    : "",
}
```
### Menambahkan data article user
```
POST: /article

data:
{
  "id"          : "",
  "title"       : "",
  "author"      : "",
  "thumbnail"   : "",
  "content"     : "",
  "markdown"    : "",
}

response:
true    // if success
false   // if failure
```
### Edit data article user
```
PUT: /article

data:
{
  "id"          : "",
  "title"       : "",
  "author"      : "",
  "thumbnail"   : "",
  "content"     : "",
  "markdown"    : "",
}

response:
true    // if success
false   // if failure
```
### Menghapus data user
```
DELETE: /article/[id]

response:
true    // if success
false   // if failure
```
## BIODATA

### Menampilkan semua data biodata
```
GET: /biodata

response:
[
  {
    "id"          : "",
    "nama"        : "",
    "desc"        : "",
    "gambar_1"    : "",
    "gambar_2"    : "",
    "gambar_3"    : "",
  },
  ...
]
```
### Menampilkan data biodata berdasarkan ```id```
```
GET: /biodata/[id]

response:
{
  "id"          : "",
  "nama"        : "",
  "desc"        : "",
  "gambar_1"    : "",
  "gambar_2"    : "",
  "gambar_3"    : "",
}
```
### Menambahkan data bodata user
```
POST: /biodata

data:
{
  "id"          : "",
  "nama"        : "",
  "desc"        : "",
  "gambar_1"    : "",
  "gambar_2"    : "",
  "gambar_3"    : "",
}

response:
true    // if success
false   // if failure
```
### Edit data biodata user
```
PUT: /biodata


data:
{
  "id"          : "",
  "nama"        : "",
  "desc"        : "",
  "gambar_1"    : "",
  "gambar_2"    : "",
  "gambar_3"    : "",
}

response:
true    // if success
false   // if failure
```
### Menghapus data biodata user
```
DELETE: /biodata/[id]

response:
true    // if success
false   // if failure
```
## HOME

### Menampilkan home user
```
GET: /home

response:
[
  {
    "id"          : "",
    "des"         : "",
  },
  ...
]
```
### Menampilkan data home bedasarkan ```id```
```
GET: /home/[id]

reponse:
{
   "id"          : "",
   "des"         : "",
}
```
### Menambah data home user
```
POST: /home

data:
{
   "id"          : "",
   "des"         : "",
}

response:
true    // if success
false   // if failure
```
### Memperbarui data home user
```
PUT: /home

data:
{
   "id"          : "",
   "des"         : "",
}

response:
true    // if success
false   // if failure
```
### Menghapus data home user
```
DELETE: /home/[id]

response:
true    // if success
false   // if failure
```
