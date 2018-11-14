function singular(n) {
    return n === 1;
}

function plural(n) {
    if (n < 10 || (n > 20 && n < 100)) {
        var ld = n % 10;
        if (ld === 2 || ld === 3 || ld === 4) {
            return true;
        }
    }
    return false;
}

function cardinal(num, sg, sgGenitive, plGenitive) {
    if (singular(num)) {
        return replaceNumber(sg, num);
    } else if (plural(num)) {
        return replaceNumber(sgGenitive || sg, num);
    } else {
        return replaceNumber(plGenitive || sgGenitive || sg, num);
    }
}

var numberRegExp = /\d+/;

function replaceNumber(s, n) {
    return s.replace(numberRegExp, n);
}

var nameGenders = {};

function genderize(name, gender) {
    nameGenders[name] = gender;
}

function gender(name) {
    // handle multiple names
    if (name instanceof Array) {
        for (var i = 0; i < name.length; i++) {
            if (gender(name[i]) === 'male') {
                return 'male';
            }
        }
        return 'female';
    }

    if (name) {
        // use value from prior call to genderize()
        var gender = nameGenders[name];
        if (gender) {
            return gender;
        }

        var parts = name.split(/\s+/);
        if (parts.length > 1) {
            // check patronymic and family name
            for (var i = 1; i < parts.length; i++) {
                // Latin or Cyrillic 'a'
                if (/[aа]$/.test(parts[i])) {
                    return 'female';
                }
            }
        }

        var fname = parts[0].toLocaleLowerCase();
        if(fname) {
            if (isFeminine[fname]) {
                return 'female';
            }

            if (fname.indexOf('y') !== -1) {
                // in case я and ю are transliterated as 'ya' and 'yu'
                fname = fname.replace(/ya/g, 'ja');
                fname = fname.replace(/yu/g, 'ju');
                if (isFeminine[fname]) {
                    return 'female';
                }
            }
        }
    }
    return 'male';
}

function pastTenseEnding(name, plural) {
    if (plural) {
        return 'ли';
    } else {
        if (gender(name) === 'female') {
            return 'ла';
        } else {
            return 'л';
        }
    }
}

function reflective(e) {
    if (e === 'л') {
        return 'ся';
    } else {
        return е + 'сь';
    }
}

function list(items) {
    items = items.map((item) => {
        return `${item}`;
    });
    if (items.length >= 2) {
        var lastItem = items.pop();
        items[items.length - 1] += ` и ${lastItem}`;
    }
    return items.join(', ');
}

var isFeminine = {};
[
    'Анна',
    'Алла',
    'Анастасия',
    'Аня',
    'Валерия',
    'Варвара',
    'Варя',
    'Вера',
    'Вероника',
    'Галина',
    'Галя',
    'Дарья',
    'Даша',
    'Екатерина',
    'Елена',
    'Елизавета',
    'Зина',
    'Зинаида',
    'Инна',
    'Ира',
    'Ирина',
    'Катерина',
    'Катя',
    'Ксения',
    'Ксюша',
    'Лара',
    'Лариса',
    'Лена',
    'Лера',
    'Лида',
    'Лидия',
    'Лиза',
    'Люба',
    'Любовь',
    'Люда',
    'Людмила',
    'Люся',
    'Марина',
    'Мария',
    'Марья',
    'Маша',
    'Мила',
    'Надежда',
    'Надя',
    'Настя',
    'Ната',
    'Наталья',
    'Наташа',
    'Оксана',
    'Ольга',
    'Оля',
    'Света',
    'Светлана',
    'Таня',
    'Татьяна',
    'Юлия',
    'Юля',
    'Яна',

    'Anna',
    'Alla',
    'Anastasija',
    'Anja',
    'Valerija',
    'Varvara',
    'Varja',
    'Vera',
    'Veronika',
    'Galina',
    'Galja',
    'Darja',
    'Dasha',
    'Ekaterina',
    'Elena',
    'Elizaveta',
    'Zina',
    'Zinaida',
    'Inna',
    'Ira',
    'Irina',
    'Katerina',
    'Katja',
    'Ksenija',
    'Ksjusha',
    'Lara',
    'Larisa',
    'Lena',
    'Lera',
    'Lida',
    'Lidija',
    'Liza',
    'Ljuba',
    'Ljubov',
    'Ljuda',
    'Ljudmila',
    'Ljusja',
    'Marina',
    'Marija',
    'Marja',
    'Masha',
    'Mila',
    'Nadezhda',
    'Nadja',
    'Nastja',
    'Nata',
    'Natalja',
    'Natasha',
    'Oksana',
    'Olga',
    'Olja',
    'Sveta',
    'Svetlana',
    'Tanja',
    'Tatjana',
    'Julija',
    'Julja',
    'Jana',
].forEach((name) => {
    isFeminine[name.toLocaleLowerCase()] = true;
});

module.exports = {
    cardinal,
    genderize,
    gender,
    pastTenseEnding,
    reflective,
    list,
};
