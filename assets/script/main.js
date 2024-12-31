function promptFiller() {
    return {
        prompt: '',
        placeholders: [],
        values: {},
        finalText: '',

        extractPlaceholders() {
            this.placeholders = [...new Set((this.prompt.match(/[\[{](.*?)[\]}]/g) || []).map(m => m.slice(1, -1)))];
            this.placeholders.forEach(p => this.values[p] = this.values[p] || '');
            this.updateFinalText();
        },

        updateFinalText() {
            this.finalText = this.prompt.replace(/[\[{](.*?)[\]}]/g, (match, p1) => this.values[p1] || match);
        },

        getLabel(placeholder) {
            return placeholder.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        },

        copyToClipboard() {
            navigator.clipboard.writeText(this.finalText).then(() => {
                console.log('Copied to clipboard!');
            }).catch(console.error);
        }
    };
}