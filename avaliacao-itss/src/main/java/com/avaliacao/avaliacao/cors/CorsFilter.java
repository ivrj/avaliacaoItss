package com.avaliacao.avaliacao.cors;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class CorsFilter implements Filter {

    private String origemPermitida = "http://localhost:4200";
    @Override
    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws IOException, ServletException {

        HttpServletRequest request = (HttpServletRequest)req;
        HttpServletResponse response = (HttpServletResponse) resp;

        response.setHeader("Access-Control-Allow-Origin", origemPermitida);
        response.setHeader("Access-Control-Allow-Credentials", "true");

        if( "OPTIONS".equals(request.getMethod()) && origemPermitida.equals(request.getHeader("Origin")) ){
            response.setHeader("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT, OPTION");
            response.setHeader("Access-Control-Allow-Methods", "Authorization, Content-Type, Accept");
           // response.setHeader("Access-Control-Allow-Headers", "Authorization, Accept,  Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
            response.setHeader("Access-Control-Max-Age", "3600");
            response.setStatus(HttpServletResponse.SC_OK);

        }else{
            chain.doFilter(req,resp);
        }

    }

    @Override
    public void destroy() {


    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }
}

