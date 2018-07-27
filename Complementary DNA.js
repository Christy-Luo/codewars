/**
 * Complementary DNA
 */

var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}

function DNAStrand(dna){
    return dna.split('').map(n=>{
      if(n==='A') return 'T';
      if(n==='T') return 'A';
      if(n==='G') return 'C';
      if(n==='C') return 'G';
    }).join('');
}