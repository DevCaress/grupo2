/* var animales = ['gato', 'perro', 'kuno', 'perico', 'delfin'];


for (let index = 0; index < animales.length; index++) {

    document.write(animales[index] + '<br>');
} */


/* var animales = [
    1,
    2,
    3,
    [
        4,5,6, [7,8,9]
    ]
]; */

/* var imgs2 = [
    ['wiwichu-a-merry-crisma', 'Logo navidad'],
    ['ndc', 'LGBTI NDC'],
    ['NDC-2', 'September NDC'],
    ['hallowin', 'Jalowin NDC'],
    ['dc_2', 'LGBTIDC'],
    ['dc', 'LGBTI 2'],
    ['DC-2', 'September DC']

]

for (let index = 0; index < imgs2.length; index++) {

    document.write('<img src="img/' + imgs2[index][0] + '.png" alt="" >');
    document.write('<p>' + imgs2[index][1] + '</p>');

} */


var imgs = [
    [
        'wiwichu-a-merry-crisma',
        'ndc',
        'NDC-2',
        'hallowin',
        'dc_2',
        'dc',
        'DC-2',
    ],
    [
        'Logo navidad',
        'LGBTI NDC',
        'September NDC',
        'Jalowin NDC',
        'LGBTIDC',
        'LGBTI 2',
        'September DC',
    ]
]



for (let index = 0; index < imgs[0].length; index++) {

    document.write('<img src="img/' + imgs[0][index] + '.png" alt="" >');
    document.write('<p>' + imgs[1][index] + '</p>');
}