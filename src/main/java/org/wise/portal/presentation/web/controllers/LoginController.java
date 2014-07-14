/**
 * Copyright (c) 2006 Encore Research Group, University of Toronto
 * 
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */
package org.wise.portal.presentation.web.controllers;

import java.util.Properties;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Controller that backs /login.html, for when user fails to log in.
 * 
 * @author Cynick Young
 * @author Geoffrey Kwan
 */
@Controller
@RequestMapping("/login.html")
public class LoginController {

	@Autowired
	private Properties wiseProperties;
	
	@RequestMapping(method=RequestMethod.GET)
	public String handleGET(
			HttpServletRequest request,
			HttpServletResponse response,
			ModelMap modelMap) throws Exception {
		String failed = request.getParameter("failed");
		String redirectUrl = request.getParameter("redirect");
		String requireCaptcha = request.getParameter("requireCaptcha");

		//get the user name that we will use to pre-populate the Username field
		String userName = request.getParameter("userName");
		
		//get the public and private keys from the wise.properties
		String reCaptchaPublicKey = wiseProperties.getProperty("recaptcha_public_key");
		String reCaptchaPrivateKey = wiseProperties.getProperty("recaptcha_private_key");

		if (StringUtils.hasText(failed)) {
			modelMap.put("failed", Boolean.TRUE);
		}

		if(StringUtils.hasText(redirectUrl)){
			modelMap.put("redirect",redirectUrl);
		}

		if(userName != null) {
			//make the userName available to the jsp page
			modelMap.put("userName", userName);
		}

		/*
		 * all three variables must be available in order for captcha to work
		 */
		if(requireCaptcha != null && reCaptchaPublicKey != null && reCaptchaPrivateKey != null) {
			if (StringUtils.hasText(requireCaptcha)) {
				//make the page require captcha
				modelMap.put("requireCaptcha", Boolean.TRUE);
				modelMap.put("reCaptchaPublicKey", reCaptchaPublicKey);
				modelMap.put("reCaptchaPrivateKey", reCaptchaPrivateKey);
			}
		}

		return "login";
	}	
}