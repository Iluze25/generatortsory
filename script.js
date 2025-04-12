const tombol = document.getElementById('button')
const keyword = document.getElementById('inputText')
const judul = document.getElementById('judul')
const story = document.getElementById('story-text')




tombol.addEventListener('click', function(){
    for(let i = 1; i < 11; i++){
        setTimeout(()=> {
            judul.innerHTML = i;
            story.innerHTML = "Tunggu sebentar atau saya akan marah!";
        }, i * 1000)
    }
    setTimeout(()=>{
        

        let cerita1 = `Di sebuah desa kecil yang dikelilingi hutan pinus, tinggal seorang gadis bernama ${keyword.value} bersama neneknya, Saraswati. Setiap sore, mereka duduk di teras, mendengarkan cerita-cerita lama sambil menyeruput teh manis hangat.<br><br>
        Tapi suatu hari, hujan turun deras dan petir menyambar sebuah pohon di belakang rumah. Nenek Saraswati terdiam lama memandangi jendela, lalu berkata, “Mungkin sudah waktunya kamu melihat loteng, ${keyword.value}.”<br><br>
        ${keyword.value} tak pernah diizinkan naik ke loteng sebelumnya. Tangga kayu tua berderit saat ia naik. Di sana, berlapis debu, ia menemukan sebuah kotak musik kecil yang terbuat dari kayu mahoni. Saat dibuka, melodi lembut mengalun—lagu yang sama yang selalu dinyanyikan nenek saat ${keyword.value} kecil.<br><br>
        Tiba-tiba ruangan berubah. Dinding loteng seolah-olah memudar, digantikan oleh pemandangan taman dengan pohon ceri mekar. Seorang gadis kecil menari di sana, dikelilingi kupu-kupu emas. Gadis itu tersenyum padanya—dan ${keyword.value} menyadari itu adalah ibunya, Amara, yang telah lama tiada.<br><br>
        Melodi berhenti, dan ruangan kembali seperti semula. ${keyword.value} turun membawa kotak musik. Di ruang tamu, nenek menatapnya dan berkata pelan, “Kau sudah melihatnya, ya?”<br><br>
        ${keyword.value} hanya mengangguk. Sejak hari itu, kotak musik itu selalu ada di samping tempat tidurnya—sebuah pintu kecil menuju kenangan yang tak pernah benar-benar hilang.`

        let cerita2 = `Di sebuah kota yang sibuk, ada seorang perempuan muda bernama ${keyword.value}. Setiap hari, ia bekerja sebagai desainer grafis di sebuah perusahaan besar. Meski kariernya cemerlang, ada satu hal yang selalu membuatnya merasa cemas—ia merasa seperti hidup dalam bayang-bayang dirinya sendiri.<br><br>
        Suatu hari, saat sedang beristirahat di kafe, ia menemukan sebuah cermin tua yang tergeletak di meja pojok. Cermin itu aneh, karena meskipun wajahnya terlihat seperti biasa, ada sesuatu yang berbeda. Bayangannya di cermin tampak lebih terang dan lebih hidup dibandingkan dengan dirinya sendiri.<br><br>
        "Apakah ini hanya perasaanku?" gumam ${keyword.value}, merasa ada sesuatu yang ganjil. Namun, setiap kali ia menatap cermin, bayangannya semakin terasa nyata, seperti sebuah entitas yang hidup di dalamnya.<br><br>
        Penasaran, ${keyword.value} membawa cermin itu pulang dan menaruhnya di kamar tidurnya. Saat malam tiba, ia duduk di hadapan cermin, mencoba memaknai apa yang sebenarnya terjadi. Bayangannya dalam cermin mulai bergerak sendiri, melangkah keluar dari cermin dan berdiri di hadapannya.<br><br>
        "Siapa kamu?" tanya ${keyword.value}, suaranya gemetar.<br><br>
        Bayangannya tersenyum. "Aku adalah bagian dari dirimu yang kau lupakan," jawab bayangan itu dengan lembut.<br><br>
        Bayangan itu kemudian mengulurkan tangan, dan dengan ragu ${keyword.value} meraihnya. Begitu ia menyentuh tangan bayangan tersebut, seketika dunia terasa berubah. Ruangan sekelilingnya memudar, dan ${keyword.value} mendapati dirinya di sebuah tempat yang penuh dengan cahaya dan kedamaian.<br><br>
        "Ini adalah dunia yang telah kau lupakan," kata bayangannya. "Kau terjebak dalam rutinitas dan beban pekerjaan, sampai-sampai kau lupa untuk hidup."<br><br>
        ${keyword.value} terdiam. Ia menyadari bahwa selama ini ia terlalu sibuk mengejar impian dan harapan orang lain, hingga melupakan apa yang benar-benar ia inginkan—kedamaian, kebahagiaan, dan ruang untuk dirinya sendiri.<br><br>
        "Apa yang harus aku lakukan?" tanya ${keyword.value}, matanya mulai berkaca-kaca.<br><br>
        "Hadapi dirimu sendiri. Temukan kembali apa yang membuat hatimu bahagia," jawab bayangan itu.<br><br>
        Saat ${keyword.value} terjaga keesokan harinya, cermin itu tidak ada lagi di kamarnya. Namun, ia merasa ada sesuatu yang berubah dalam dirinya. Ia mulai memberi waktu untuk hal-hal yang ia nikmati, mulai mendengarkan hatinya, dan meninggalkan kekhawatiran yang selama ini mengekang.<br><br>
        Meskipun dunia di luar tetap sibuk, ${keyword.value} kini belajar untuk menemukan kedamaian di dalam dirinya. Ia menyadari, terkadang kita perlu melihat bayangan kita sendiri untuk menemukan jalan kembali ke rumah—rumah yang ada di dalam hati kita.`

        let cerita3 = `Setiap sore, setelah bel pulang sekolah berbunyi, ${keyword.value} memanjat atap rumahnya yang tua dan berkarat. Ia membawa buku gambar, pensil warna, dan sebotol air jeruk yang dibuat ibunya. Di atas sana, langit terasa lebih dekat—dan sepi menjadi temannya.<br><br>
        ${keyword.value} tidak banyak bicara di sekolah. Ia lebih suka menggambar awan daripada berlari di lapangan. Teman-teman menganggapnya aneh, tapi ${keyword.value} tahu langit menyimpan cerita yang tak bisa diucapkan dengan kata-kata.<br><br>
        Suatu hari, saat awan berbentuk seperti burung besar melintas, ia menggambarnya dengan cepat. Tapi sebelum selesai, terdengar suara dari sebelahnya.<br><br>
        "Kamu juga suka lihat langit?" tanya seorang gadis yang tiba-tiba duduk tak jauh darinya. Rambutnya dikepang dua, dan ia membawa kamera polaroid.<br><br>
        "Aku suka menggambarnya," jawab ${keyword.value}, agak kikuk.<br><br>
        "Aku suka memotretnya," katanya sambil tersenyum. "Namaku Lani."<br><br>
        Sejak hari itu, atap rumah ${keyword.value} bukan lagi tempat yang sunyi. Mereka duduk berdampingan—Lani dengan kameranya, ${keyword.value} dengan bukunya. Kadang mereka saling diam, tapi diam mereka penuh cerita.<br><br>
        Suatu sore, Lani mengajak ${keyword.value} ke bukit kecil di pinggir kota.<br><br>
        "Aku mau tunjukkan sesuatu," katanya.<br><br>
        Dari sana, mereka melihat matahari terbenam yang perlahan menyentuh cakrawala. Lani memotret, ${keyword.value} menggambar. Saat itu, ${keyword.value} merasa hatinya hangat. Mungkin, ia tak lagi sendiri.<br><br>
        Langit di ujung atap kini punya dua nama: ${keyword.value} dan Lani. Dan setiap coretan di buku gambar ${keyword.value} kini berwarna lebih cerah—karena ada cerita, dan ada teman.`

        const arrStory = [
            {
                Judul: "Melodi dari Loteng",
                cerita: cerita1
            }, 
            {
                Judul: "Bayang-Bayang di Cermin",
                cerita: cerita2
            },
            {
                Judul: "Langit di Ujung Atap",
                cerita: cerita3
            },
        ];
        let indexStoies = Math.floor(Math.random(1) * (2 - 0  + 1))
        judul.innerHTML = arrStory[indexStoies].Judul
        story.innerHTML  = arrStory[indexStoies].cerita
    }, 10000)

});

function openWhatsApp(){
    window.open("https://api.whatsapp.com/send/?phone=6283136286696&text&type=phone_number&app_absent=0", '_blank')
}
