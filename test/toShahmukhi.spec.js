const { toShahmukhi } = require( '../index' )

// Test words
const words = [
  ['ਅੱਜ ਆਖਾਂ ਵਾਰਸ ਸ਼ਾਹ ਨੂੰ ਕਿਤੋਂ ਕਬਰਾਂ ਵਿਚੋਂ ਬੋਲ', 'اجّ آکھاں وارث شاہ نوں، کِتوں قبراں وِچّوں بول'],
  ['ਜਿਥੇ ਵਜਦੀ ਸੀ ਫੂਕ ਪਿਆਰ ਦੀ ਵੇ ਉਹ ਵੰਝਲੀ ਗਈ ਗੁਆਚ', 'جِتّھے وجدی سی پُھوک پیار دی، اوہ ونجھلی گئی گواچ'],
  ['ਧਰਤੀ ਤੇ ਲਹੂ ਵੱਸਿਆ ਕਬਰਾਂ ਪਈਆਂ ਚੋਣ', 'دھرتی تے لہو وسّیا، قبراں پئیاں چوݨ']

]

describe( 'toShahmukhi()', () => {
  words.map( ( [ unicode, shahmukhi ] ) => it( `should convert '${unicode}' to '${shahmukhi}'`, () => {
    expect( toShahmukhi( unicode ) ).toBe( shahmukhi )
  } ) )
} )
