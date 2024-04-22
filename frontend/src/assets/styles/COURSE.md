---
# SASS Instructions

    1. Install LIVE SASS COMPILER extension in VS Code
            RU: установите расширение LIVE SASS COMPILER в VS Code
    2. Create a new file called style.scss
            RU: создайте новый файл с именем style.scss
    3. @use is used for importing files and using them
            ex: @use '_resets';
            NOTE: all files that are getting imported or used should start with an underscore
            RU: все файлы, которые импортируются или используются, должны начинаться с подчеркивания

    4. @import is used for importing files and using them
            ex: @import '_vars';
            NOTE: all files that are getting imported or used should start with an underscore
            RU: все файлы, которые импортируются или используются, должны начинаться с подчеркивания

    5. @mixin is used for creating a reusable block of code
            ex: @mixin flex($direction, $justify, $align) {
                    display: flex;
                    flex-direction: $...;
                    justify-content: $...;
                    align-items: $...;
                }
            RU: @mixin используется для создания повторно используемого блока кода
            --------------------------------
            For using them you need to call them like this:
            RU: Для их использования вам нужно вызывать их так:
                ex: @include flex(row, center, center);

    6. @extends is used for extending the same code to 
        multiple selectors. It is used to avoid repetition of code.
        RU: @extends используется для расширения одного и того же кода для
        нескольких селекторов. Он используется для избежания повторения кода.
           
        ex: .submit-btn {
                background-color: green;
                color: snow;
                @extend %general-button;
                &:hover { background-color: darkgreen; }    
            }
    7. @for is used for creating a loop
        RU: @for используется для создания цикла
        ex: @for $i from 1 through 4 {
                .col-#{$i} { width: (100% / 4) * $i; }
            }
    8. @if @else is used for creating a conditional statement
        RU: @if @else используется для создания условного оператора
        ex: @if $i == 1 {
                .col-#{$i} { width: 100%; }
            } @else if $i == 2 {
                .col-#{$i} { width: 50%; }
            } @else if $i == 3 {
                .col-#{$i} { width: 33.333%; }
            } @else if $i == 4 {
                .col-#{$i} { width: 25%; }
            } @else {
                .col-#{$i} { width: 100%; }
            }
---
