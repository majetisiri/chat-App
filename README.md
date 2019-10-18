# chat-App
<h1>
Project Datasets 
<h1>
<br>
<h2 id="song-dataset">Song Dataset</h2>
<p>The first dataset is a subset of real data from the <a target="_blank" href="https://labrosa.ee.columbia.edu/millionsong/">Million Song Dataset</a>. Each file is in JSON format and contains metadata about a song and the artist of that song. The files are partitioned by the first three letters of each song's track ID. For example, here are filepaths to two files in this dataset.</p>
<pre><code class="lang-txt">song_data/A/B/C/TRABCEI128F424C983.json
song_data/A/A/B/TRAABJL12903CDCF1A.json
</code></pre>
<p>And below is an example of what a single song file, TRAABJL12903CDCF1A.json, looks like.</p>
<pre><code class="lang-json">{"<span class="hljs-attribute">num_songs</span>": <span class="hljs-value"><span class="hljs-number">1</span></span>, "<span class="hljs-attribute">artist_id</span>": <span class="hljs-value"><span class="hljs-string">"ARJIE2Y1187B994AB7"</span></span>, "<span class="hljs-attribute">artist_latitude</span>": <span class="hljs-value"><span class="hljs-literal">null</span></span>, "<span class="hljs-attribute">artist_longitude</span>": <span class="hljs-value"><span class="hljs-literal">null</span></span>, "<span class="hljs-attribute">artist_location</span>": <span class="hljs-value"><span class="hljs-string">""</span></span>, "<span class="hljs-attribute">artist_name</span>": <span class="hljs-value"><span class="hljs-string">"Line Renaud"</span></span>, "<span class="hljs-attribute">song_id</span>": <span class="hljs-value"><span class="hljs-string">"SOUPIRU12A6D4FA1E1"</span></span>, "<span class="hljs-attribute">title</span>": <span class="hljs-value"><span class="hljs-string">"Der Kleine Dompfaff"</span></span>, "<span class="hljs-attribute">duration</span>": <span class="hljs-value"><span class="hljs-number">152.92036</span></span>, "<span class="hljs-attribute">year</span>": <span class="hljs-value"><span class="hljs-number">0</span></span>}
</code></pre>
<h2 id="log-dataset">Log Dataset</h2>
<p>The second dataset consists of log files in JSON format generated by this <a target="_blank" href="https://github.com/Interana/eventsim">event simulator</a> based on the songs in the dataset above. These simulate activity logs from a music streaming app based on specified configurations.</p>
<p>The log files in the dataset you'll be working with are partitioned by year and month. For example, here are filepaths to two files in this dataset.</p>
<pre><code class="lang-txt">log_data/2018/11/2018-11-12-events.json
log_data/2018/11/2018-11-13-events.json
</code></pre>
<p>And below is an example of what the data in a log file, 2018-11-12-events.json, looks like.</p>
<img src="https://video.udacity-data.com/topher/2019/February/5c6c15e9_log-data/log-data.png">
