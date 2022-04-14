
const isi = {
    judul:'Amara',
    judul2:'Cheryl',
    judul3:'Maria',
    nama:'Hi, Im HERDIAN AZIZ',
    amarades:'Amara adalah seorang gadis cantik dan juga pintar yang tinggal di sebuah kota yang bernama Less Town, dia bekerja sebagai Sekretaris di sebuah perusahaan.',
    spanbr1:'I am 20 years old and I am currently studying Information Systems',
    spanbr2:'at Ahmad Dahlan University, Yogyakarta.',
    cheryldes:'Cheryl adalah seorang gadis cantik dan berumur 20 tahun yang tinggal di sebuah kota yang bernama Yogyakarta, dia anak skate dan dia juga seorang mahasiswa di sebuah universitas yang berada di kota tersebut.',
    mariades:'Maria adalah seorang gadis cantik dan berumur 19 tahun yang tinggal di sebuah kota yang bernama Less Town, dia seorang mahasiswa di sebuah universitas yang berada di kota tersebut.',


    
}
const vm = new Vue({
    el: ".global",
    data: isi
})



var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("slide");
        
    btn[0].onclick = function(){
        slide.style.transform = "translateX(0px)";
        for(i=0;i<4;i++){
            btn[i].classList.remove("aktif");
        } 
        this.classList.add("aktif");
    }
    btn[1].onclick = function(){
        slide.style.transform = "translateX(-1100px)";
        for(i=0;i<4;i++){
            btn[i].classList.remove("aktif");
        } 
        this.classList.add("aktif");
    }
    btn[2].onclick = function(){
        slide.style.transform = "translateX(-2200px)";
        for(i=0;i<4;i++){
            btn[i].classList.remove("aktif");
        } 
        this.classList.add("aktif");
    }
    btn[3].onclick = function(){
        slide.style.transform = "translateX(-3300px)";
        for(i=0;i<4;i++){
            btn[i].classList.remove("aktif");
        } 
        this.classList.add("aktif");
    }

