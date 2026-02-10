import IndiaFlag from '../../util/svg/country/IndiaFlag'
import NepalFlag from '../../util/svg/country/NepalFlag'
import SingaporeFlag from '../../util/svg/country/SingaporeFlag'
import USAFlag from '../../util/svg/country/USAFlag'


export const threats = [
    { timestamp: 'Oct 09, 2025 12:24', country: 'Singapore', flag: <SingaporeFlag />, threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' },
    { timestamp: 'Feb 11, 2026 12:24', country: 'India', flag: <IndiaFlag />, threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' },
    { timestamp: 'Oct 19, 2025 12:24', country: 'Nepal', flag: <NepalFlag />, threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' },
    { timestamp: 'Feb 07, 2026 12:24', country: 'United States', flag: <USAFlag />, threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' },
    { timestamp: 'Mar 13, 2025 12:24', country: 'United States', flag: <USAFlag />, threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' },
    { timestamp: 'Oct 19, 2025 12:24', country: 'United States', flag: <USAFlag />, threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' },
    { timestamp: 'Mar 15, 2025 12:24', country: 'United States', flag: <USAFlag />, threat: 'Adware', sourceIP: '103.24.81.52', domain: 'netquy.com', destIP: '106.10.236.137', risk: 'Suspicious' },

    { timestamp: "Oct 6, 2025 12:05", country: "Singapore", flag: <SingaporeFlag />, threat: "Trojan", sourceIP: "103.24.81.5", domain: "badcdn.sg", destIP: "192.168.1.5", risk: "High" },
    { timestamp: "Oct 18, 2025 12:06", country: "India", flag: <IndiaFlag />, threat: "Adware", sourceIP: "45.118.132.6", domain: "popupads.in", destIP: "192.168.1.6", risk: "Suspicious" },
    { timestamp: "Feb 9, 2026 12:07", country: "Nepal", flag: <NepalFlag />, threat: "Malware", sourceIP: "27.34.12.7", domain: "viruscdn.np", destIP: "192.168.1.7", risk: "High" },
    { timestamp: "Feb 6, 2026 12:08", country: "United States", flag: <USAFlag />, threat: "Phishing", sourceIP: "54.182.91.8", domain: "login-alert.us", destIP: "192.168.1.8", risk: "Critical" },

    { timestamp: "Mar 23, 2025 12:09", country: "Singapore", flag: <SingaporeFlag />, threat: "Spyware", sourceIP: "103.24.81.9", domain: "trackme.sg", destIP: "192.168.1.9", risk: "Medium" },
    { timestamp: "Feb 10, 2026 12:10", country: "India", flag: <IndiaFlag />, threat: "Trojan", sourceIP: "45.118.132.10", domain: "bankhack.in", destIP: "192.168.1.10", risk: "Critical" },
    { timestamp: "Oct 19, 2025 12:11", country: "Nepal", flag: <NepalFlag />, threat: "Adware", sourceIP: "27.34.12.11", domain: "fastads.np", destIP: "192.168.1.11", risk: "Suspicious" },
    { timestamp: "Jan 18, 2026 12:12", country: "United States", flag: <USAFlag />, threat: "Malware", sourceIP: "54.182.91.12", domain: "wormhost.us", destIP: "192.168.1.12", risk: "High" },

    { timestamp: "Oct 19, 2025 12:13", country: "Singapore", flag: <SingaporeFlag />, threat: "Phishing", sourceIP: "103.24.81.13", domain: "securepay.sg", destIP: "192.168.1.13", risk: "Critical" },
    { timestamp: "Mar 07, 2025 12:14", country: "India", flag: <IndiaFlag />, threat: "Spyware", sourceIP: "45.118.132.14", domain: "spytrack.in", destIP: "192.168.1.14", risk: "Medium" },
    { timestamp: "Oct 8, 2025 12:15", country: "Nepal", flag: <NepalFlag />, threat: "Trojan", sourceIP: "27.34.12.15", domain: "stealer.np", destIP: "192.168.1.15", risk: "High" },
    { timestamp: "Oct 19, 2025 12:16", country: "United States", flag: <USAFlag />, threat: "Adware", sourceIP: "54.182.91.16", domain: "adsengine.us", destIP: "192.168.1.16", risk: "Suspicious" },

    { timestamp: "Oct 19, 2025 12:17", country: "Singapore", flag: <SingaporeFlag />, threat: "Malware", sourceIP: "103.24.81.17", domain: "infected.sg", destIP: "192.168.1.17", risk: "High" },
    { timestamp: "Mar 26, 2025 12:18", country: "India", flag: <IndiaFlag />, threat: "Phishing", sourceIP: "45.118.132.18", domain: "securebank.in", destIP: "192.168.1.18", risk: "Critical" },
    { timestamp: "Feb 02, 2026 12:19", country: "Nepal", flag: <NepalFlag />, threat: "Spyware", sourceIP: "27.34.12.19", domain: "monitor.np", destIP: "192.168.1.19", risk: "Medium" },
    { timestamp: "Oct 19, 2025 12:20", country: "United States", flag: <USAFlag />, threat: "Trojan", sourceIP: "54.182.91.20", domain: "backdoor.us", destIP: "192.168.1.20", risk: "Critical" },

        { timestamp: "Feb 10, 2023 13:21", country: "Singapore", flag: <SingaporeFlag />, threat: "Adware", sourceIP: "103.24.81.21", domain: "adsplus.sg", destIP: "192.168.1.21", risk: "Suspicious" },
    { timestamp: "Mar 11, 2025 14:22", country: "India", flag: <IndiaFlag />, threat: "Trojan", sourceIP: "45.118.132.22", domain: "malbank.in", destIP: "192.168.1.22", risk: "High" },
    { timestamp: "Jan 15, 2026 15:23", country: "Nepal", flag: <NepalFlag />, threat: "Malware", sourceIP: "27.34.12.23", domain: "infect.np", destIP: "192.168.1.23", risk: "High" },
    { timestamp: "Dec 05, 2025 16:24", country: "United States", flag: <USAFlag />, threat: "Phishing", sourceIP: "54.182.91.24", domain: "verify.us", destIP: "192.168.1.24", risk: "Critical" },

    { timestamp: "Mar 19, 2025 09:25", country: "Singapore", flag: <SingaporeFlag />, threat: "Spyware", sourceIP: "103.24.81.25", domain: "watch.sg", destIP: "192.168.1.25", risk: "Medium" },
    { timestamp: "Feb 02, 2026 10:26", country: "India", flag: <IndiaFlag />, threat: "Adware", sourceIP: "45.118.132.26", domain: "clickads.in", destIP: "192.168.1.26", risk: "Suspicious" },
    { timestamp: "Dec 12, 2025 11:27", country: "Nepal", flag: <NepalFlag />, threat: "Trojan", sourceIP: "27.34.12.27", domain: "grab.np", destIP: "192.168.1.27", risk: "High" },
    { timestamp: "Jan 28, 2026 12:28", country: "United States", flag: <USAFlag />, threat: "Malware", sourceIP: "54.182.91.28", domain: "payload.us", destIP: "192.168.1.28", risk: "High" },

    { timestamp: "Mar 02, 2025 13:29", country: "Singapore", flag: <SingaporeFlag />, threat: "Phishing", sourceIP: "103.24.81.29", domain: "securemail.sg", destIP: "192.168.1.29", risk: "Critical" },
    { timestamp: "Feb 17, 2026 14:30", country: "India", flag: <IndiaFlag />, threat: "Spyware", sourceIP: "45.118.132.30", domain: "observe.in", destIP: "192.168.1.30", risk: "Medium" },
    { timestamp: "Jan 09, 2026 15:31", country: "Nepal", flag: <NepalFlag />, threat: "Adware", sourceIP: "27.34.12.31", domain: "boostads.np", destIP: "192.168.1.31", risk: "Suspicious" },
    { timestamp: "Dec 18, 2025 16:32", country: "United States", flag: <USAFlag />, threat: "Trojan", sourceIP: "54.182.91.32", domain: "rootkit.us", destIP: "192.168.1.32", risk: "Critical" },

    { timestamp: "Jan 22, 2026 17:33", country: "Singapore", flag: <SingaporeFlag />, threat: "Malware", sourceIP: "103.24.81.33", domain: "infected.sg", destIP: "192.168.1.33", risk: "High" },
    { timestamp: "Mar 14, 2025 18:34", country: "India", flag: <IndiaFlag />, threat: "Phishing", sourceIP: "45.118.132.34", domain: "securepay.in", destIP: "192.168.1.34", risk: "Critical" },
    { timestamp: "Feb 26, 2023 19:35", country: "Nepal", flag: <NepalFlag />, threat: "Spyware", sourceIP: "27.34.12.35", domain: "listen.np", destIP: "192.168.1.35", risk: "Medium" },
    { timestamp: "Dec 29, 2023 20:36", country: "United States", flag: <USAFlag />, threat: "Adware", sourceIP: "54.182.91.36", domain: "adsware.us", destIP: "192.168.1.36", risk: "Suspicious" },

    { timestamp: "Mar 30, 2025 21:37", country: "Singapore", flag: <SingaporeFlag />, threat: "Trojan", sourceIP: "103.24.81.37", domain: "steal.sg", destIP: "192.168.1.37", risk: "High" },
    { timestamp: "Jan 11, 2026 22:38", country: "India", flag: <IndiaFlag />, threat: "Malware", sourceIP: "45.118.132.38", domain: "worm.in", destIP: "192.168.1.38", risk: "High" },
    { timestamp: "Dec 07, 2025 23:39", country: "Nepal", flag: <NepalFlag />, threat: "Phishing", sourceIP: "27.34.12.39", domain: "fakebank.np", destIP: "192.168.1.39", risk: "Critical" },
    { timestamp: "Feb 04, 2026 08:40", country: "United States", flag: <USAFlag />, threat: "Spyware", sourceIP: "54.182.91.40", domain: "spylog.us", destIP: "192.168.1.40", risk: "Medium" },

];