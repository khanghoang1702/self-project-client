export const data = {
    "blocks": [
        {
            "key": "bf65k",
            "text": "1. Giới thiệu về Quick Tunnels ",
            "type": "header-two",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 3,
                    "style": "BOLD"
                },
                {
                    "offset": 3,
                    "length": 27,
                    "style": "color-rgb(27,27,27)"
                },
                {
                    "offset": 3,
                    "length": 27,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 3,
                    "length": 27,
                    "style": "fontsize-1.75em"
                },
                {
                    "offset": 3,
                    "length": 27,
                    "style": "fontfamily-Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol"
                }
            ],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "8adam",
            "text": "\nQuick Tunnels là một công cụ của Cloudflare cho phép các nhà phát triển thử nghiệm với Cloudflare Tunnel mà không cần thêm một trang web vào DNS của Cloudflare. TryCloudflare sẽ khởi chạy một quy trình tạo ra một tên miền phụ ngẫu nhiên trên trycloudflare.com. Các yêu cầu đến tên miền phụ này sẽ được định tuyến thông qua mạng lưới của Cloudflare đến máy chủ web của bạn đang chạy trên localhost. ",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 1,
                    "length": 241,
                    "style": "color-rgb(27,27,27)"
                },
                {
                    "offset": 260,
                    "length": 138,
                    "style": "color-rgb(27,27,27)"
                },
                {
                    "offset": 1,
                    "length": 241,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 243,
                    "length": 155,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 1,
                    "length": 241,
                    "style": "fontsize-18"
                },
                {
                    "offset": 243,
                    "length": 155,
                    "style": "fontsize-18"
                },
                {
                    "offset": 1,
                    "length": 241,
                    "style": "fontfamily-Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol"
                },
                {
                    "offset": 243,
                    "length": 155,
                    "style": "fontfamily-Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol"
                },
                {
                    "offset": 243,
                    "length": 17,
                    "style": "color-rgb(43,109,173)"
                }
            ],
            "entityRanges": [
                {
                    "offset": 243,
                    "length": 17,
                    "key": 0
                }
            ],
            "data": {}
        },
        {
            "key": "d3iel",
            "text": "1.1. Sử dụng TryCloudflare",
            "type": "header-four",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 26,
                    "style": "color-rgb(27,27,27)"
                },
                {
                    "offset": 0,
                    "length": 26,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 26,
                    "style": "fontsize-1.45em"
                },
                {
                    "offset": 0,
                    "length": 26,
                    "style": "fontfamily-Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol"
                }
            ],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "3ij30",
            "text": "Để sử dụng TryCloudflare, bạn cần thực hiện các bước sau:",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 57,
                    "style": "color-rgb(27,27,27)"
                },
                {
                    "offset": 0,
                    "length": 57,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 57,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 57,
                    "style": "fontfamily-Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol"
                }
            ],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "ec4m0",
            "text": "Cài đặt cloudflared theo hướng dẫn. Nếu bạn đã cài đặt phiên bản cũ, hãy cập nhật lên phiên bản 2020.5.1 hoặc mới hơn.",
            "type": "unordered-list-item",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 118,
                    "style": "color-rgb(27,27,27)"
                },
                {
                    "offset": 0,
                    "length": 118,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 118,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 118,
                    "style": "fontfamily-Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol"
                },
                {
                    "offset": 0,
                    "length": 118,
                    "style": "fontsize-1em"
                }
            ],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "8roh8",
            "text": "Khởi chạy một máy chủ web có thể truy cập localhost thông qua cloudflared.",
            "type": "unordered-list-item",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 74,
                    "style": "color-rgb(27,27,27)"
                },
                {
                    "offset": 0,
                    "length": 74,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 74,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 74,
                    "style": "fontfamily-Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol"
                },
                {
                    "offset": 0,
                    "length": 74,
                    "style": "fontsize-1em"
                }
            ],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "9cfc1",
            "text": "Chạy lệnh sau trong terminal để bắt đầu một Tunnels miễn phí: $ cloudflared tunnel --url http://localhost:8080 ",
            "type": "unordered-list-item",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 61,
                    "style": "color-rgb(27,27,27)"
                },
                {
                    "offset": 62,
                    "length": 48,
                    "style": "color-rgb(27,27,27)"
                },
                {
                    "offset": 0,
                    "length": 61,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 62,
                    "length": 48,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 61,
                    "style": "fontsize-18"
                },
                {
                    "offset": 62,
                    "length": 48,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 61,
                    "style": "fontfamily-Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol"
                },
                {
                    "offset": 62,
                    "length": 48,
                    "style": "fontfamily-Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol"
                },
                {
                    "offset": 0,
                    "length": 61,
                    "style": "fontsize-1em"
                },
                {
                    "offset": 62,
                    "length": 48,
                    "style": "fontsize-1em"
                },
                {
                    "offset": 62,
                    "length": 48,
                    "style": "CODE"
                }
            ],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "386nk",
            "text": "Cloudflared sẽ tạo ra một tên miền phụ ngẫu nhiên khi kết nối với mạng lưới Cloudflare và in nó trong terminal để bạn sử dụng và chia sẻ. Kết quả đầu ra sẽ phục vụ lưu lượng truy cập từ máy chủ trên máy cục bộ của bạn đến Internet công cộng, sử dụng Cloudflare’s Argo Smart Routing, tại một URL công khai. ",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 305,
                    "style": "color-rgb(27,27,27)"
                },
                {
                    "offset": 0,
                    "length": 305,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 305,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 305,
                    "style": "fontfamily-Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol"
                }
            ],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "6hv7c",
            "text": "1.2. Các ví dụ về trường hợp sử dụng TryCloudflare ",
            "type": "header-four",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 50,
                    "style": "color-rgb(27,27,27)"
                },
                {
                    "offset": 0,
                    "length": 50,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 50,
                    "style": "fontsize-1.45em"
                },
                {
                    "offset": 0,
                    "length": 50,
                    "style": "fontfamily-Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol"
                }
            ],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "9u8jg",
            "text": "Tạo một máy chủ web cho một dự án trên laptop của bạn mà bạn muốn chia sẻ với người khác trên các mạng khác nhau.",
            "type": "unordered-list-item",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 113,
                    "style": "color-rgb(27,27,27)"
                },
                {
                    "offset": 0,
                    "length": 113,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 113,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 113,
                    "style": "fontfamily-Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol"
                },
                {
                    "offset": 0,
                    "length": 113,
                    "style": "fontsize-1em"
                }
            ],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "4mnmb",
            "text": "Kiểm tra khả năng tương thích của trình duyệt cho một trang web mới bằng cách tạo một Tunnels miễn phí và kiểm tra liên kết trong các trình duyệt khác nhau.",
            "type": "unordered-list-item",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 156,
                    "style": "color-rgb(27,27,27)"
                },
                {
                    "offset": 0,
                    "length": 156,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 156,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 156,
                    "style": "fontfamily-Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol"
                },
                {
                    "offset": 0,
                    "length": 156,
                    "style": "fontsize-1em"
                }
            ],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "3obg0",
            "text": "Thực hiện các bài kiểm tra tốc độ từ các khu vực khác nhau bằng cách sử dụng một công cụ như Pingdom hoặc WebPageTest để kết nối đến tên miền phụ ngẫu nhiên được tạo bởi TryCloudflare. ",
            "type": "unordered-list-item",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 184,
                    "style": "color-rgb(27,27,27)"
                },
                {
                    "offset": 0,
                    "length": 184,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 184,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 184,
                    "style": "fontfamily-Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol"
                },
                {
                    "offset": 0,
                    "length": 184,
                    "style": "fontsize-1em"
                }
            ],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "b3p1q",
            "text": "1.3. Tại sao Cloudflare cung cấp dịch vụ này miễn phí? ",
            "type": "header-four",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 54,
                    "style": "color-rgb(27,27,27)"
                },
                {
                    "offset": 0,
                    "length": 54,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 54,
                    "style": "fontsize-1.45em"
                },
                {
                    "offset": 0,
                    "length": 54,
                    "style": "fontfamily-Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol"
                }
            ],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "dmseo",
            "text": "Cloudflare muốn nhiều người dùng hơn trải nghiệm sự cải thiện về tốc độ và bảo mật của Cloudflare Tunnel (và Argo Smart Routing). Họ hy vọng bạn sẽ thử nghiệm nó với TryCloudflare và quyết định thêm nó vào các trang web sản xuất của mình. ",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 238,
                    "style": "color-rgb(27,27,27)"
                },
                {
                    "offset": 0,
                    "length": 238,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 238,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 238,
                    "style": "fontfamily-Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol"
                }
            ],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "64o4p",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        }
    ],
    "entityMap": {
        "0": {
            "type": "LINK",
            "mutability": "MUTABLE",
            "data": {
                "url": "http://trycloudflare.com/",
                "title": "trycloudflare.com",
                "targetOption": "_blank",
                "_map": {
                    "type": "LINK",
                    "mutability": "MUTABLE",
                    "data": {
                        "url": "http://trycloudflare.com/",
                        "title": "trycloudflare.com",
                        "targetOption": "_blank"
                    }
                }
            }
        }
    }
}