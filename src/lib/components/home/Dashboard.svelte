<!-- src/lib/components/home/Dashboard.svelte -->
<script lang="ts">
  export let consumption: { code: string; liters: number }[];
</script>
 
  <!-- Global Dashboard -->
    <section class="section dashboard">
    <h2>Global Drinks Dashboard</h2>
    <p class="description">Explore regional alcohol consumption patterns</p>

    <div class="stats-grid">
        <div class="stat-card">
        <h3>Global Average</h3>
        <p class="value">9.0L</p>
        <p class="label">per capita/year</p>
        </div>

        <div class="stat-card">
        <h3>Highest Region</h3>
        <p class="value">14.3L</p>
        <p class="label">Czech Republic</p>
        </div>
    </div>

    <input
        type="text"
        placeholder="Search country..."
        class="search-input"
    />

    <div class="tab-row">
        <button class="tab active">Annual Data</button>
        <button class="tab">Seasonal Trends</button>
    </div>

    <!-- Mock Data Table (Version 1 style) -->
    <table class="consumption-table">
    <thead>
        <tr>
        <th>Country</th>
        <th>Liters/Capita</th>
        </tr>
    </thead>
    <tbody>
        {#each consumption as row}
        <tr>
            <td>{row.code}</td>
            <td>{row.liters}</td>
        </tr>
        {/each}
    </tbody>
    </table>


    <div class="legend">
        <h4>Liters/Capita</h4>
        <ul>
        <li>12+</li>
        <li>9–12</li>
        <li>7–9</li>
        <li>5–7</li>
        <li>&lt;5</li>
        </ul>
    </div>

    <div class="country-grid">
        <span>CZE</span><span>AUT</span><span>FRA</span><span>DEU</span>
        <span>GBR</span><span>USA</span><span>AUS</span><span>JPN</span>
        <span>CHN</span><span>IND</span><span>BRA</span><span>MEX</span>
        <span>ZAF</span><span>NGA</span>
    </div>

    <p class="tap-note">Tap any country on the map to view detailed consumption patterns</p>

    <p class="verified-small">Data Verified • Updated Feb 2026</p>
    </section>
