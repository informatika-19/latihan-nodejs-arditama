// array

const dataMahasiswa = [
    {
        nama : 'arditamajuliansyah',
        npm : '19421053',
        prodi : 'Informatika'
    },
    {
        nama : 'AzizGhoffar',
        npm : '19421062',
        prodi : 'Informatika'  
    }
]
    for (let i in dataMahasiswa){
        console.log(dataMahasiswa[i].nama + '-' + dataMahasiswa[i].npm + '-' + dataMahasiswa[i].prodi)
    }