const longestRepetition = (a) => { 
    if(a === "")
      return [ '', 0 ];
    const matches = a.match(/([A-Za-z0-9])\1+/g).reduce((res,x) => res = res.length < x.length ? x : res ,"");
    return [matches[0],matches.length];
  }

  console.log(longestRepetition('aabbbbccaaaa'));
  console.log(longestRepetition('m8w4q1dj929y86apagse6ulwj65mpt77yg9o5yign30bdd2303jzskhc8wquvl7vpbb7oloisl55te2bnbk6zcc5n1iype6wd8pd5oqd4xtifowzf74jl16qexw7likki0xr2cqkwwgzlb1wpevh3yfza4zrzdglx5ahlv1hzlrnl3on3tze9kgne7mzwso6zq2x8eqnttsr8afk9xkv5w0ub457ik3eqvoojrhul762ica265l8yfsy2mh5dqf6fzx89rd2x1hfr10mjmqj8uffce3548afr17b42gi4uwv5ix2si625k1xqnlmcb635j00w5tca7t7z31c299esjdfdg7x2qkpsbte5a9vupjhbuldui730g1u7r7a8xzn9l148wcsvifv2ri9vis0nz286xk1kbjci8l3yjtiddqtylazkiwbd97elhpmh853ssbkqtv5azqlhjtsnkjkarhtx9049b43d3rud09dankfu8k7pwv2'));
  console.log(longestRepetition('0000000000000000000111111111222222222222333333333333333333333444444444444444444555555555555566666666677777778888888888888899999999999999999aaaaaaaaaabbbbbbbbbbbbbbccccccccccccccccddddddddddddeeeeeeeeeeeeeffffffffffffgggggggggggggggghhhhhhhhhhhhhhiiiiiiiiiiiiiiijjjjjjjjjjjjkkkkkkkkkkkkklllllllllllllllmmmmmmmmmmmmmmmmnnnnnnnnnnnnoooooooooooppppppppppppqqqqqqqqqqqqqqrrrrrrrrrrrrrssssssssssssssssssttttttttttuuuuuuuuuvvvvvvvvvvvvvvvwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxyyyyyyyyyyyyyyyyzzzzzzzzzzzzzzzzzz'));