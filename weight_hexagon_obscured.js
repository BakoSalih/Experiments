export function weight_hexagon(n,t,r,e,o){const a=t*r,f=t*e,i=t*o,c=2*(a+f+i-1);for(var h=[],l=0;l<c;l++)h[l]=[],h[l].length=c,h[l].fill(0);const s=n.length,u=n[0].length;for(var v=0;v<c;v++)for(var g=0;g<c;g++)if(M(v,g))if(v%2==0){const t=v/2;h[c-1-g][v]=n[s-1-g%s][t%u]}else g%2==0&&(h[c-1-g][v]=1);else x=g,v>=2*(f+i)-1&&x>=2*(a+i)-1&&m(v,g)?h[c-1-g][v]=1:m(v,g)&&(g+v)%2==1&&(h[c-1-g][v]=1);var x;return h;function m(n,t){var r=!1;const e=c-1-t;return 0==n&&0==t?r=!0:0==n&&t>0?r=0==h[e+1][n]:n>0&&0==t?r=(n+t)%2==1?0==h[e][n-1]:0==h[e][n-1]&&0==h[e-1][n-1]:n>0&&t==c-1?r=(n+t)%2==1?0==h[e][n-1]&&0==h[e+1][n-1]&&0==h[e+1][n]:0==h[e][n-1]&&0==h[e+1][n]:n>0&&t>0&&t<c-1&&(r=(n+t)%2==1?0==h[e][n-1]&&0==h[e+1][n-1]&&0==h[e+1][n]:0==h[e][n-1]&&0==h[e-1][n-1]&&0==h[e+1][n]),r}function M(n,t){var r=!1;return n<2*Math.min(f,i)?r=t>=0&&t<2*a+n:n>=2*i&&n<2*f?r=t>=0&&t<2*(a+i)-1:n>=2*f&&n<2*i?r=t>=n-2*f+1&&t<2*a+n:n>=2*Math.max(f,i)&&n<2*(f+i)-1&&(r=t>=n-2*f+1&&t<2*(a+i)-1),r}}
