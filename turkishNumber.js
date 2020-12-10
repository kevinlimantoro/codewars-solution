const getTurkishNumber = (num) => {
    const unit = ['sıfır',
        'bir',
        'iki',
        'üç',
        'dört',
        'beş',
        'altı',
        'yedi',
        'sekiz',
        'dokuz'];
    const dozen = ['on',
        'yirmi',
        'otuz',
        'kırk',
        'elli',
        'altmış',
        'yetmiş',
        'seksen',
        'doksan'];

    return [(dozen[Math.floor(num / 10) - 1]),(unit[num < 10 || num % 10 > 0 ? num % 10 : -1])].filter(x => !!x).join(' ');
}
console.log(getTurkishNumber(0));
console.log(getTurkishNumber(16));
console.log(getTurkishNumber(70));
console.log(getTurkishNumber(26));