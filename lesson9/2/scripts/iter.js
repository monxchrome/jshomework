// Цикл в циклі

// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
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
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

for (const coursesArrayElement of coursesArray) {

    //title
    let title_div = document.createElement('div');
    title_div.classList.add('title-div')
    let title = document.createElement('h1');
    title.innerText = coursesArrayElement.title;

    document.body.appendChild(title_div);
    title_div.appendChild(title);

    // durations
    let father = document.createElement('div');
    father.classList.add('father');

    let m_duration_div = document.createElement('div');
    let m_duration = document.createElement('h2');
    m_duration.innerText = `Month Duration: ${coursesArrayElement.monthDuration}`;

    let h_duration_div = document.createElement('div');
    let h_duration = document.createElement('h2');
    h_duration.innerText = `Hour Duration: ${coursesArrayElement.hourDuration}`;

    document.body.appendChild(father);
    father.append(m_duration_div, h_duration_div);
    m_duration_div.appendChild(m_duration);
    h_duration_div.appendChild(h_duration);

    // modules
    let div = document.createElement('div');
    div.classList.add('mother');

    for (let i = 0; i < coursesArrayElement.modules.length; i++) {
        const module = coursesArrayElement.modules[i];

        let modules_div = document.createElement('div');
        modules_div.classList.add('modules-div');

        let modules_ul = document.createElement('ul');
        let modules_li = document.createElement('li');
        modules_li.innerText = `${module}`

        modules_div.appendChild(modules_ul);
        modules_ul.appendChild(modules_li);

        div.appendChild(modules_div);
    }

    document.body.appendChild(div);

}