'use strict';

/**
 * Service Worker of SuperPWA
 * To learn more and add one to your website, visit - https://superpwa.com
 */
 
const cacheName = 'localhost-superpwa-2.2.17';
const startPage = 'https://localhost/mcwebadmin';
const offlinePage = 'https://localhost/mcwebadmin/';
const filesToCache = [startPage, offlinePage, 'https://localhost/mcwebadmin/wp-content/uploads/2022/10/the-pulse-residentials-g1-592x444.jpg', 'https://localhost/mcwebadmin/wp-content/uploads/2022/10/fedfe3wg-592x444.png', 'https://localhost/mcwebadmin/wp-content/uploads/2022/10/tgfdg-592x444.png', 'https://localhost/mcwebadmin/wp-content/uploads/2022/10/4t4y-592x444.png', 'https://localhost/mcwebadmin/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-28-at-4.40.21-PM-592x444.jpeg', 'https://localhost/mcwebadmin/wp-content/uploads/2022/10/fedfe3wg-592x444.png', 'https://localhost/mcwebadmin/wp-content/uploads/2022/10/Apartment-Catch-Residences-71109-1665990371573-592x444.jpg', 'https://localhost/mcwebadmin/wp-content/uploads/2022/10/trfhy-592x444.png', 'https://localhost/mcwebadmin/wp-content/uploads/2023/05/1682679856creek-waters-6-592x444.webp', 'https://localhost/mcwebadmin/wp-content/uploads/2022/10/dubai-marina-758x564.jpg', 'https://localhost/mcwebadmin/wp-content/uploads/2022/10/dubai-downtown-758x564.jpg', 'https://localhost/mcwebadmin/wp-content/uploads/2022/10/the-palm-jameirah-758x564.jpg', 'https://localhost/mcwebadmin/wp-content/uploads/2022/10/al-reem-island-758x564.jpg', 'https://localhost/mcwebadmin/wp-content/uploads/2022/10/business-bay-758x564.jpg', 'https://localhost/mcwebadmin/wp-content/uploads/2022/10/khalifa-city-758x564.jpg', 'https://localhost/mcwebadmin/wp-content/uploads/2022/10/dubai-marina-758x564.jpg', 'https://localhost/mcwebadmin/wp-content/uploads/2022/10/dubai-downtown-758x564.jpg', 'https://localhost/mcwebadmin/wp-content/uploads/2022/10/the-palm-jameirah-758x564.jpg', 'https://localhost/mcwebadmin/wp-content/uploads/2022/10/al-reem-island-758x564.jpg', 'https://localhost/mcwebadmin/wp-content/uploads/2022/10/business-bay-758x564.jpg', 'https://localhost/mcwebadmin/wp-content/uploads/2022/10/khalifa-city-758x564.jpg', 'https://localhost/mcwebadmin/wp-content/uploads/2022/10/Haris-bin-Khalid-CEO-150x150.jpg', 'https://localhost/mcwebadmin/wp-content/uploads/2016/02/agent-3-150x150.jpg', 'https://localhost/mcwebadmin/wp-content/uploads/2016/02/CEO-150x150.jpeg', 'https://localhost/mcwebadmin/wp-content/uploads/2022/10/testimonial2.jpg', 'https://localhost/mcwebadmin/wp-content/uploads/2022/10/testimonial3.jpg', 'https://localhost/mcwebadmin/wp-content/uploads/2022/10/testimonial1.jpg', 'https://localhost/mcwebadmin/wp-content/uploads/2022/10/testimonial4.jpg', 'https://localhost/mcwebadmin/wp-content/uploads/elementor/thumbs/damac-properties-q0qz0dof88joz4p1kdt63cg8luo5kqekeiouhbjvow.png', 'https://localhost/mcwebadmin/wp-content/uploads/elementor/thumbs/emaar-properties-q0qz12485xh5czpjlodgw6a81vbp4v3l5vngyijn74.png', 'https://localhost/mcwebadmin/wp-content/uploads/elementor/thumbs/ellington-logo-q1rc0fbtizt9xce18if5c994jc8wf2llow225q9cmo.jpg', 'https://localhost/mcwebadmin/wp-content/uploads/elementor/thumbs/Binghatti-q1rap8tghd855yx7qm8aonv742sn20amvd7nyq7qy8.jpg', 'https://localhost/mcwebadmin/wp-content/uploads/elementor/thumbs/Danube-logo-q1rbjwbzcv6rs6eaqv8azxecifpk2nzif33pdkrk1c.jpg', 'https://localhost/mcwebadmin/wp-content/uploads/elementor/thumbs/Sobha-logo-q165b9o0el196ffxr05pfz3nbd2wbll7ckvfd59dm8.jpg', 'https://localhost/mcwebadmin/wp-content/uploads/elementor/thumbs/meeras-logo-q0qz1ec4mrxvjx7smbnmal77rvngwxg3jk4s741iy8.png', 'https://localhost/mcwebadmin/wp-content/uploads/elementor/thumbs/dubai-properties-q0qz0oyhi8z4ug8nqioox9lrqh4k53ncg2io8n35m8.png', 'https://localhost/mcwebadmin/wp-content/uploads/elementor/thumbs/nakheel-logo-q0qz1oocpyc13msrxy4ik0lab48i9ll58zb4h5m71s.png', 'https://localhost/mcwebadmin/wp-content/uploads/elementor/thumbs/Aldar-logo-q1rbcsnvpxgs28po7sps5pwyxmppwzsirxnmuban1s.jpg', 'https://localhost/mcwebadmin/wp-content/uploads/elementor/thumbs/azizi-logo-q0s34daq9t9clr7xok0kiykd79fidixxllpvc2j8z4.jpg', 'https://localhost/mcwebadmin/wp-content/uploads/elementor/thumbs/mag-property-logo-q1rbkmngo86st9c2h6luxqr9583u26vzupdatboj74.jpg'];
const neverCacheUrls = [/\/wp-admin/,/\/wp-login/,/preview=true/];

// Install
self.addEventListener('install', function(e) {
	console.log('SuperPWA service worker installation');
	e.waitUntil(
		caches.open(cacheName).then(function(cache) {
			console.log('SuperPWA service worker caching dependencies');
			filesToCache.map(function(url) {
				return cache.add(url).catch(function (reason) {
					return console.log('SuperPWA: ' + String(reason) + ' ' + url);
				});
			});
		})
	);
});

// Activate
self.addEventListener('activate', function(e) {
	console.log('SuperPWA service worker activation');
	e.waitUntil(
		caches.keys().then(function(keyList) {
			return Promise.all(keyList.map(function(key) {
				if ( key !== cacheName ) {
					console.log('SuperPWA old cache removed', key);
					return caches.delete(key);
				}
			}));
		})
	);
	return self.clients.claim();
});

// Range Data Code
var fetchRangeData = function(event){
    var pos = Number(/^bytes\=(\d+)\-$/g.exec(event.request.headers.get('range'))[1]);
            console.log('Range request for', event.request.url, ', starting position:', pos);
            event.respondWith(
              caches.open(cacheName)
              .then(function(cache) {
                return cache.match(event.request.url);
              }).then(function(res) {
                if (!res) {
                  return fetch(event.request)
                  .then(res => {
                    return res.arrayBuffer();
                  });
                }
                return res.arrayBuffer();
              }).then(function(ab) {
                return new Response(
                  ab.slice(pos),
                  {
                    status: 206,
                    statusText: 'Partial Content',
                    headers: [
                      // ['Content-Type', 'video/webm'],
                      ['Content-Range', 'bytes ' + pos + '-' +
                        (ab.byteLength - 1) + '/' + ab.byteLength]]
                  });
              }));
}

// Fetch
self.addEventListener('fetch', function(e) {
	
	// Return if the current request url is in the never cache list
	if ( ! neverCacheUrls.every(checkNeverCacheList, e.request.url) ) {
	  console.log( 'SuperPWA: Current request is excluded from cache.' );
	  return;
	}
	
	// Return if request url protocal isn't http or https
	if ( ! e.request.url.match(/^(http|https):\/\//i) )
		return;
	
    	// Return if request url is from an external domain.
	if ( new URL(e.request.url).origin !== location.origin )
		return;
    
			// For POST requests, do not use the cache. Serve offline page if offline.
			if ( e.request.method !== 'GET' ) {
				e.respondWith(
					fetch(e.request).catch( function() {
						        return caches.match(offlinePage);
					})
				);
				return;
			}
			
			// For Range Headers
			if (e.request.headers.has('range')) {
				return;
			}
			// Revving strategy
			if ( (e.request.mode === 'navigate' || e.request.mode === 'cors') && navigator.onLine ) {
				e.respondWith(
					fetch(e.request).then(function(response) {
						return caches.open(cacheName).then(function(cache) {
							cache.put(e.request, response.clone());
							return response;
						});  
					}).catch(function(){
						// If the network is unavailable, get
						return cache.match(e.request.url);
					})
				);
				return;
			}

			//strategy_replace_start
			e.respondWith(
				caches.match(e.request).then(function(response) {
					return response || fetch(e.request).then(function(response) {
						return caches.open(cacheName).then(function(cache) {
							cache.put(e.request, response.clone());
							return response; 
						});  
					});
				}).catch(function() {
					return caches.match(offlinePage);
				})
			);
			//strategy_replace_end


});

// Check if current url is in the neverCacheUrls list
function checkNeverCacheList(url) {
	if ( this.match(url) ) {
		return false;
	}
	return true;
}
importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js");
	            if(workbox.googleAnalytics){
                  try{
                    workbox.googleAnalytics.initialize();
                  } catch (e){ console.log(e.message); }
                }