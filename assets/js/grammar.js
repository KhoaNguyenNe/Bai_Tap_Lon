// Hàm để tạo HTML cho mỗi grammar
function taoKhoaHoc(khoaHoc) {
    return `
    <div class="item">
        <div class="item-left">
            <div class="item-icon-grammar">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAdtJREFUaEPtWFluwyAQJSdre7K2J2t7s+pJmYhgZmVccEWkfCTG8LYZsG/l4p/bxfGXTWC2g9uB7cCgAleI0Med40sp5bOU8l1zXpkAgL93DHrCvBoBUrsHnLgsSYBTuzUA8XlbJUIAjVy/Oup4OgFLRCQ+UH9KEVsjQl3mi2HxpwS8agM87gF4LlaHpnNGF7KqTSITcPyWwB/yjxuyCHjVxtoUFwCD4lxsiGg6ASyKr9SzuYKsVbeAxzyH/Ecd8EakJlEDx/+euYYIRCLSqj8CnhVbqwGPQpa40BjvvN38SxHyLtADj0V/7jGpr0fmbt17zNdzQGpl1l2fWzACni1gzoHoItQaqV5asiPCsFGXaoBapPWwxdqsbFCaq2z+PW1UIiMBt/Z4iUQKgXqBevPqFSmNzQCvxTLtKNEqOFJH7VzdDYwGafuAls/e9UzwasyzCWTFRjzA1aptAk2GsuMj5l/NV6AA/i0BemjxaqJGXB3gXLF3XKCNzuuOuIGd1UZbAu0u7TmeTCcgHTEsbqgFfEYRkwMSeOtDzRQCUBbWP709E+pIipSpPk2DnIUcGd5GypT/MyIUAV+fXvGKRjrhHuZfxYEw8U0gLF3SjduBJCHD02wHwtIl3fgLtFNlMeuotM0AAAAASUVORK5CYII="/>
            </div>
            <div class="item-name">${khoaHoc.desc}</div>
        </div>
    </div>
  `;
}

// Thêm các đánh giá vào trong list
function themKhoaHoc(nhieuKhoaHoc, id) {
    const formList = document.getElementById(id);
    formList.innerHTML = nhieuKhoaHoc.map(taoKhoaHoc).join("");
}

const Grammarleft = [
    {
        desc: "NOUNS ",
    },
    {
        desc: "ADJECTIVES",
    },
    {
        desc: "ADVERBS",
    },
    {
        desc: "NOUN, ADJECTIVE, ADVERB EXCERCISES",
    },
    {
        desc: "PRONOUNS",
    },
    {
        desc: "PREPOSITIONS",
    },
    {
        desc: "CONJUNCTIONS",
    },
    {
        desc: "NUMERIC EXPRESSIONS BEFORE NOUNS",
    },
    {
        desc: "RELATIVE CLAUSES",
    },
    {
        desc: "TO INFINITIVES AND GERUNDS",
    },
    {
        desc: "PRESENT SIMPLE TENSE ",
    },
    {
        desc: "PRESENT CONTINUOUS TENSE ",
    },
    {
        desc: "PRESENT PERFECT TENSE ",
    },
    {
        desc: "PRESENT PERFECT CONTINUOUS TENSE ",
    },
    {
        desc: "PAST SIMPLE TENSE ",
    },
    {
        desc: "PAST CONTINUOUS TENSE ",
    },
    {
        desc: "PAST PERFECT TENSE ",
    },
    {
        desc: "PAST PERFECT CONTINUOUS TENSE ",
    },
    {
        desc: "FUTURE SIMPLE TENSE ",
    },
];


// Thêm các đánh giá vào form-List
themKhoaHoc(Grammarleft, "grammar-items-left");

const Grammarright = [
    {
        desc: "FUTURE CONTINUOUS TENSE ",
    },
    {
        desc: "FUTURE PERFECT TENSE ",
    },
    {
        desc: "FUTURE PERFECT CONTINUOUS TENSE ",
    },
    {
        desc: "NEAR FUTURE TENSE ",
    },
    {
        desc: "MIXED TENSE EXERCISES",
    },
    {
        desc: "PASSIVE VOICE ",
    },
    {
        desc: "IMPERATIVE PASSIVE AND SPECIAL PASSIVE CASES",
    },
    {
        desc: "MODAL VERBS",
    },
    {
        desc: "CONDITIONAL SENTENCES",
    },
    {
        desc: "REDUCING RELATIVE CLAUSES ",
    },
    {
        desc: "VERBS",
    },
    {
        desc: "SENTENCE ELEMENTS ",
    },
    {
        desc: "ADVERBIAL CLAUSES OF TIME",
    },
    {
        desc: "ADVERBIAL CLAUSES OF TIME",
    },
    {
        desc: "PHRASES & CLAUSES",
    },
    {
        desc: "PHRASES & CLAUSES OF CONCESSION",
    },
    {
        desc: "PHRASES & CLAUSES OF EFFECT",
    },
    {
        desc: "PHRASES & CLAUSES OF PURPOSE",
    },
    {
        desc: "PHRASES & CLAUSES OF REASON",
    },
];

// Thêm các đánh giá vào form-List
themKhoaHoc(Grammarleft, "grammar-items-right");