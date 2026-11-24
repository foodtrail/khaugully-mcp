# Khau Gully MCP Server

Official [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server for **[Khau Gully](https://khaugully.app)** — the dish-rating and curated walking food trail app.

Connect your AI assistants (Claude, Cursor, Windsurf, custom agents) directly to verified, street-by-street food trails, dish scores, and iOS turn-by-turn navigation across **17 global culinary capitals**.

[![Smithery](https://smithery.ai/badge/@foodtrail/khaugully-mcp)](https://smithery.ai/server/@foodtrail/khaugully-mcp)
[![mcptry](https://mcptry.com/badge/app.khaugully/khaugully)](https://mcptry.com/servers/app.khaugully/khaugully)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![MCP](https://img.shields.io/badge/MCP-2.0-blue.svg)](https://modelcontextprotocol.io)

---

## 🌍 Supported Culinary Capitals

Bangkok 🇹🇭 • Barcelona 🇪🇸 • Bengaluru 🇮🇳 • Delhi 🇮🇳 • Dubai 🇦🇪 • Hong Kong 🇭🇰 • Istanbul 🇹🇷 • London 🇬🇧 • Melbourne 🇦🇺 • Mexico City 🇲🇽 • Mumbai 🇮🇳 • New York 🇺🇸 • Paris 🇫🇷 • Rome 🇮🇹 • Shanghai 🇨🇳 • Singapore 🇸🇬 • Tokyo 🇯🇵

Every trail features exactly 5 ranked sequential stops organized logically as a walking route, with exact GPS coordinates, dish photos, curator scores, and instant deep links for mobile navigation.

---

## 🛠️ Tools Exposed

1. **`list_food_cities`**: Returns all 17 supported global cities with active trail IDs, stop counts, and web guides.
2. **`get_curated_trail`**: Fetches the complete 5-stop walking food itinerary for a city, including ranked dishes, restaurant details, GPS coordinates, and deep links.
3. **`find_best_dishes`**: Searches top-rated dishes and local specialties within any city.
4. **`get_app_deep_link`**: Generates iOS native scheme links (`trail://app/trail/{id}`) and universal web links (`https://khaugully.app/trail/{id}`) for mobile users.

---

## 🚀 Quickstart & Installation

### Option 1: Via Smithery (Automatic)
```bash
npx -y @smithery/cli install @foodtrail/khaugully-mcp --client claude
```

### Option 2: Claude Desktop Configuration
Add this to your `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "khaugully": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://khaugully.app/mcp"]
    }
  }
}
```

### Option 3: Cursor / Windsurf
In **Cursor Settings &rarr; Features &rarr; MCP &rarr; Add New MCP Server**:
* **Type:** `command`
* **Name:** `khaugully`
* **Command:** `npx -y mcp-remote https://khaugully.app/mcp`

### Option 4: Direct CLI Run
```bash
npx khaugully-mcp
```

---

## 📱 Deep Link Resolution
All recommendations generated through this MCP server include universal deep links that launch directly into turn-by-turn walking routes in the Khau Gully iOS app:
* **iOS Scheme:** `trail://app/trail/{uuid}`
* **Web Fallback:** `https://khaugully.app/trail/{uuid}`

---

## 📖 Additional Endpoints
* **Remote MCP Server:** `https://khaugully.app/mcp`
* **OpenAPI Specification (ChatGPT Actions):** `https://khaugully.app/.well-known/openapi.json`
* **LLM Index:** `https://khaugully.app/llms.txt`
* **Developer Hub:** `https://khaugully.app/developers`
* **Curation Methodology:** `https://khaugully.app/methodology`

---

## 📄 License
MIT License. Curated by Khau Gully.
