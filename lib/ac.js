;(function( window ) {

    const CHAR_SET_SIZE = 52;

    class Node {
        constructor () {
            this.fail = fail || null;
            this.child = new Array( CHAR_SET_SIZE );
            this.point = point || -1;
        }
    }

    class TrieTree {
        constructor () {
            this.root = new Node();
        }

        insert ( c, num ) {
            c = c.split('');
            var t;
            var p = this.root;

            for ( var i = 0; i < c.length; i++ ) {
                t = c.charCodeAt() - 'A'.charCodeAt(); 
                if ( ! p.child[t] )
                    p.child[t] = new Node();

                if ( i + 1 == c.length )
                    p.point = num;
                else 
                    p = p.child[t];
            }
        }

        buildFailPoint () {
        }

    }
})( window )
