let obj = [{
    title: 'FullStack',
    monthDuration: 7,
    hourDuration: 909,
    modules: [
        'html',
        'css',
        'js',
        'mysql',
        'mongodb',
        'react',
        'angular',
        'aws',
        'docker',
        'git',
        'node.js',
        'python',
        'java'
    ]
}]

// title
for (const objElement of obj) {

    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    document.body.appendChild(div);

    div.appendChild(h1);
    div.classList.add('title')
    h1.innerText = objElement.title
}

// duration

for (const objElement of obj) {

    let div = document.createElement('div');
    div.classList.add('father');
    document.body.appendChild(div);

    let mDiv = document.createElement('div');
    let hDiv = document.createElement('div');
    mDiv.classList.add('m-duration');
    hDiv.classList.add('h-duration');
    div.append(mDiv, hDiv);

    let mh2 = document.createElement('h2');
    let hh2 = document.createElement('h2');


    mh2.innerText = `Month Duration: ${objElement.monthDuration}`;
    hh2.innerText = `Hour Duration: ${objElement.hourDuration}`;

    mDiv.appendChild(mh2);
    hDiv.appendChild(hh2);
}

// modules

for (const objElement of obj) {

    let div = document.createElement('div');
    div.classList.add('mother');
    document.body.appendChild(div);

    // let h3 = document.createElement('h3');

    for (let i = 0; i < obj[0].modules.length; i++) {

        const module = obj[0].modules[i];

        let text_div = document.createElement('div');
        text_div.classList.add('text-div');
        div.appendChild(text_div)


        let h3 = document.createElement('h3');
        h3.innerText = module;
        text_div.appendChild(h3);
    }

}

