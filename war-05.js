//Scrabble
const Scrabble = function(string) {
  var letters = string.toLowerCase();
  letters = letters.split("");

  let letterValues = 0;

  for (let i = 0; i < letters.length; i++) {
    switch (letters[i]) {
      case 'a': case 'e': case 'i': case 'o': case 'u': case 'l': case 'n': case 'r': case 's': case 't':
        letterValues += 1;
        break;
        case 'b': case 'c': case 'm': case 'p':
          letterValues += 3;
          break;
          case 'f': case 'h': case 'v': case 'w': case 'y':
            letterValues += 4;
            break;

            case 'g': case 'd':
              letterValues += 2;
              break;
              case 'k':
                letterValues += 4;
                break;
              J, X
              case 'j': case 'x':
                letterValues += 8;
                break;
                Q, Z
                case 'q': case 'z':
                  letterValues += 8;
                  break;
                  default:
                    letterValues += 0;
                  }

              }
              console.log(letterValues);


          }


            Scrabble("cabbage");
            Scrabble("cartage");
            Scrabble("TRFV");


            //"cabbage" should be scored as worth 14 points:
