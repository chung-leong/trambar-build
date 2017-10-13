exports.fromTitle = fromTitle;
exports.fromPersonalName = fromPersonalName;

function fromTitle(title) {
    if (typeof(title) === 'string') {
        title = { en: title };
    }
    var name = '';
    var lang;
    for (var lang in title) {
        name = String(title[lang]);
        name = latinize(name);
        name = name.replace(/\s+/g, '-');
        name = name.replace(/[^a-z\-]/g, '');
        if (/^\-+$/.test(name)) {
            name = '';
        }
        if (name) {
            break;
        }
    }
    if (name.length > 32) {
        name = name.substr(0, 32);
    }
    return name;
}

function fromPersonalName(fullName) {
    if (typeof(fullName) === 'string') {
        fullName = { en: fullName };
    }
    var name = '';
    var lang;
    for (var lang in fullName) {
        var parts = String(fullName[lang]).split(/\s+/).filter(Boolean);
        var last = latinize(parts[parts.length - 1]);
        var initials = '';
        for (var i = 0; i < parts.length - 1; i++) {
            initials += latinize(parts[i]).charAt(0);
        }
        name = initials + last;
        name = name.replace(/[^a-z]/g, '');
        if (name) {
            break;
        }
    }
    return name;
}

function latinize(s) {
    return String(s)
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
}